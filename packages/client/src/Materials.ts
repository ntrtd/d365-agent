/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { MaterialsApi } from './MaterialsApi';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';

/**
 * This class represents the entity "Materials" of service "d365_metadata".
 */
export class Materials<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MaterialsType<T>
{
  /**
   * Technical entity name for Materials.
   */
  static override _entityName = 'Materials';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Materials entity.
   */
  static _keys = ['MaterialCode'];
  /**
   * Material Code.
   */
  declare materialCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Material Description.
   * @nullable
   */
  declare materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Code.
   * @nullable
   */
  declare classCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label Code.
   * @nullable
   */
  declare labelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Limited Qty.
   * @nullable
   */
  declare limitedQty?: NoYes | null;
  /**
   * Stowage Code.
   * @nullable
   */
  declare stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ems Code.
   * @nullable
   */
  declare emsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Passenger.
   * @nullable
   */
  declare packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Cargo.
   * @nullable
   */
  declare packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiplier.
   */
  declare multiplier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Enviro Dangerous.
   * @nullable
   */
  declare enviroDangerous?: NoYes | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Name Code.
   * @nullable
   */
  declare technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Category Code.
   * @nullable
   */
  declare transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Code.
   * @nullable
   */
  declare identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flashpoint.
   * @nullable
   */
  declare flashpoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marine Pollutant.
   * @nullable
   */
  declare marinePollutant?: NoYes | null;
  /**
   * Air Type.
   * @nullable
   */
  declare airType?: HmimAirType | null;
  /**
   * Reg Code.
   * @nullable
   */
  declare regCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nos.
   * @nullable
   */
  declare nos?: NoYes | null;
  /**
   * Iata Star.
   * @nullable
   */
  declare iataStar?: NoYes | null;
  /**
   * Division Code.
   * @nullable
   */
  declare divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Group Code.
   * @nullable
   */
  declare packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tunnel Code.
   * @nullable
   */
  declare tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Code.
   * @nullable
   */
  declare packCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MaterialsApi<T>) {
    super(_entityApi);
  }
}

export interface MaterialsType<T extends DeSerializers = DefaultDeSerializers> {
  materialCode: DeserializedType<T, 'Edm.String'>;
  materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  labelCode?: DeserializedType<T, 'Edm.String'> | null;
  limitedQty?: NoYes | null;
  stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  emsCode?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
  multiplier: DeserializedType<T, 'Edm.Decimal'>;
  enviroDangerous?: NoYes | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  flashpoint?: DeserializedType<T, 'Edm.String'> | null;
  marinePollutant?: NoYes | null;
  airType?: HmimAirType | null;
  regCode?: DeserializedType<T, 'Edm.String'> | null;
  nos?: NoYes | null;
  iataStar?: NoYes | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  packCode?: DeserializedType<T, 'Edm.String'> | null;
}
