'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// 1. L'EXPORT DEFAULT EST OBLIGATOIRE ICI
export default function Home() {
  const [excursions, setExcursions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
          // 2. La fonction doit être async pour utiliser await
              const fetchTours = async () => {
                    try {
                            const { data, error } = await supabase.from('excursions').select('*');
                                    if (error) throw error;
                                            setExcursions(data || []);
                                                  } catch (err) {
                                                          console.error("Erreur :", err);
                                                                } finally {
                                                                        setLoading(false);
                                                                              }
                                                                                  };
                                                                                      fetchTours();
                                                                                        }, []);

                                                                                          return (
                                                                                              <main className="p-6 bg-slate-50 min-h-screen">
                                                                                                    <h1 className="text-2xl font-bold text-blue-600 mb-6">Nos Excursions</h1>
                                                                                                          
                                                                                                                {loading ? (
                                                                                                                        <p>Chargement...</p>
                                                                                                                              ) : (
                                                                                                                                      <div className="grid gap-4">
                                                                                                                                                {excursions.map((tour) => (
                                                                                                                                                            <div key={tour.id} className="bg-white p-4 rounded-xl shadow">
                                                                                                                                                                          <h2 className="font-bold text-lg">{tour.title}</h2>
                                                                                                                                                                                        <p className="text-blue-600 font-bold">{tour.price_adult}$</p>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                  