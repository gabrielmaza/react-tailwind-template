import { BadgeCheckIcon, SaveIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import BreadCrumb from "../../../components/breadcrumb/BreadCrumb";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import InputText from "../../../components/inputs/text/InputText";
import Navbar from "../../../components/navbar/Navbar";
import PageTitle from "../../../components/page-title/PageTitle";
import Tabs from "../../../components/tabs/Tabs";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="py-6 px-4 flex flex-col gap-6 container-100vh-180">
        <div className="flex flex-col-reverse gap-6 lg:flex-row">
          <div className="main-container">
            <BreadCrumb />
            <PageTitle label="Perfil" />
            <Tabs
              tab1Title="My data"
              tab2Title="Billing"
              tab3Title="Validations"
              tab1Content={
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">User</h2>
                    <InputText
                      id="user-name"
                      value="Nombre de usuario"
                      placeholder="Nombre de usuario..."
                    />
                  </div>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Email</h2>
                    <InputText
                      type="email"
                      id="user-email"
                      value="Email"
                      placeholder="Email..."
                    />
                  </div>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Password</h2>
                    <InputText
                      type="password"
                      id="user-password"
                      value="1234578"
                      placeholder="Contraseña..."
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Address</h2>
                    <InputText
                      id="user-country"
                      value="Country"
                      placeholder="Country.."
                    />
                    <InputText
                      id="user-state"
                      value="State"
                      placeholder="State.."
                    />
                    <InputText
                      id="user-city"
                      value="City"
                      placeholder="City.."
                    />
                    <InputText
                      id="user-city-cp"
                      value="123456"
                      placeholder="Postal code.."
                    />
                    <InputText
                      id="user-street"
                      value="Street"
                      placeholder="Street.."
                    />
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-street-number"
                          value="12345"
                          placeholder="Number.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-street-floor"
                          value="4"
                          placeholder="Floor / Appartment.."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end w-full gap-3 max-w-xl">
                    <Button
                      type="submit"
                      color="green"
                      icon={<SaveIcon />}
                      label="Guardar"
                    />
                  </div>
                </form>
              }
              tab2Content={
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Customer data</h2>
                    <label className="text-md font-semibold">Name</label>
                    <label className="text-md font-semibold">Lastname</label>
                    <InputText value="Nombre" placeholder="Nombre.." />
                    <label className="text-md font-semibold">
                      Billing code
                    </label>
                    <InputText value="Cuit" placeholder="Cuit.." />
                    <label className="text-md font-semibold">Address</label>
                    <InputText
                      id="user-country"
                      value=""
                      placeholder="País.."
                    />
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-state"
                          value=""
                          placeholder="Provincia.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-city"
                          value=""
                          placeholder="Localidad.."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-city-cp"
                          value=""
                          placeholder="Código postal.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-street"
                          value=""
                          placeholder="Calle.."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-street-number"
                          value=""
                          placeholder="Número.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-street-floor"
                          value=""
                          placeholder="Piso / Departamento.."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<SaveIcon />}
                        label="Guardar"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Payment methods</h2>
                    <label className="text-md font-semibold">Debit card</label>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-number"
                          value="4444 4444 5555 5555"
                          placeholder="Número..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-name"
                          value="Card Name"
                          placeholder="Nombre..."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-exp-date"
                          value="13/28"
                          placeholder="Vencimiento..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-csv"
                          value="123"
                          placeholder="csv..."
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<SaveIcon />}
                        label="Guardar"
                      />
                    </div>
                    <label className="text-md font-semibold">Credit card</label>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-number"
                          value="4444 4444 5555 5555"
                          placeholder="Número..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-name"
                          value="Card Name"
                          placeholder="Nombre..."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-exp-date"
                          value="13/28"
                          placeholder="Vencimiento..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-csv"
                          value="123"
                          placeholder="csv..."
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<SaveIcon />}
                        label="Guardar"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 max-w-xl">
                    <h2 className="text-md font-bold">Seller data</h2>
                    <label className="text-md font-semibold">
                      Business name
                    </label>
                    <InputText value="Nombre" placeholder="Nombre.." />
                    <label className="text-md font-semibold">
                      Billing number
                    </label>
                    <InputText value="Cuit" placeholder="Cuit.." />
                    <label className="text-md font-semibold">Address</label>
                    <InputText
                      id="user-country"
                      value=""
                      placeholder="País.."
                    />
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-state"
                          value=""
                          placeholder="Provincia.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-city"
                          value=""
                          placeholder="Localidad.."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-city-cp"
                          value=""
                          placeholder="Código postal.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-street"
                          value=""
                          placeholder="Calle.."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="user-street-number"
                          value=""
                          placeholder="Número.."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="user-street-floor"
                          value=""
                          placeholder="Piso / Departamento.."
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<SaveIcon />}
                        label="Guardar"
                      />
                    </div>
                    <h3 className="text-md font-semibold">PayPal</h3>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<SaveIcon />}
                        label="Guardar"
                      />
                    </div>
                  </div>
                </form>
              }
              tab3Content={
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-3 max-w-xl">
                    <label className="text-md font-semibold">
                      Tarjeta VISA crédito
                    </label>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-number"
                          value="4444 4444 5555 5555"
                          placeholder="Número..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-name"
                          value="Card Name"
                          placeholder="Nombre..."
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <InputText
                          id="card-exp-date"
                          value="13/28"
                          placeholder="Vencimiento..."
                        />
                      </div>
                      <div className="w-1/2">
                        <InputText
                          id="card-csv"
                          value="123"
                          placeholder="csv..."
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="transparent-bordered"
                        icon={<TrashIcon />}
                        label="Eliminar"
                      />
                    </div>
                    <label className="text-md font-semibold">Identidad</label>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<BadgeCheckIcon />}
                        label="Validar"
                      />
                    </div>
                    <label className="text-md font-semibold">Dirección</label>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<BadgeCheckIcon />}
                        label="Validar"
                      />
                    </div>
                    <label className="text-md font-semibold">Empresa</label>
                    <div className="flex justify-end w-full gap-3 max-w-xl">
                      <Button
                        type="submit"
                        color="green"
                        icon={<BadgeCheckIcon />}
                        label="Validar"
                      />
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
