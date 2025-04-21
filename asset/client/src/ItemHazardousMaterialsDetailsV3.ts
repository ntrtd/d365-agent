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
import type { ItemHazardousMaterialsDetailsV3Api } from './ItemHazardousMaterialsDetailsV3Api';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';

/**
 * This class represents the entity "ItemHazardousMaterialsDetailsV3" of service "d365_metadata".
 */
export class ItemHazardousMaterialsDetailsV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemHazardousMaterialsDetailsV3Type<T>
{
  /**
   * Technical entity name for ItemHazardousMaterialsDetailsV3.
   */
  static override _entityName = 'ItemHazardousMaterialsDetailsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemHazardousMaterialsDetailsV3 entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'RegCode', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Reg Code.
   */
  declare regCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
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
   * Class Code Description.
   * @nullable
   */
  declare classCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Pack Code Description.
   * @nullable
   */
  declare packCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Stowage Code Description.
   * @nullable
   */
  declare stowageCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ems Code Description.
   * @nullable
   */
  declare emsCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Code Description.
   * @nullable
   */
  declare identificationCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pack Inst Code Cargo Description.
   * @nullable
   */
  declare packInstCodeCargoDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Label Code Description.
   * @nullable
   */
  declare labelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Division Code Description.
   * @nullable
   */
  declare divisionCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Passenger Description.
   * @nullable
   */
  declare packInstCodePassengerDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Marine Pollutant.
   * @nullable
   */
  declare marinePollutant?: NoYes | null;
  /**
   * Packing Group Code Description.
   * @nullable
   */
  declare packingGroupCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Technical Name Code Description.
   * @nullable
   */
  declare technicalNameCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tunnel Code Description.
   * @nullable
   */
  declare tunnelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Material Radioactive.
   * @nullable
   */
  declare isMaterialRadioactive?: NoYes | null;
  /**
   * Air Type.
   * @nullable
   */
  declare airType?: HmimAirType | null;
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
   * Transport Category Code Description.
   * @nullable
   */
  declare transportCategoryCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pack Code.
   * @nullable
   */
  declare packCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemHazardousMaterialsDetailsV3Api<T>) {
    super(_entityApi);
  }
}

export interface ItemHazardousMaterialsDetailsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  regCode: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  labelCode?: DeserializedType<T, 'Edm.String'> | null;
  classCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  limitedQty?: NoYes | null;
  stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  emsCode?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  packCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
  multiplier: DeserializedType<T, 'Edm.Decimal'>;
  enviroDangerous?: NoYes | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  stowageCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  emsCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  identificationCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodeCargoDescription?: DeserializedType<T, 'Edm.String'> | null;
  labelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  divisionCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodePassengerDescription?: DeserializedType<T, 'Edm.String'> | null;
  marinePollutant?: NoYes | null;
  packingGroupCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  technicalNameCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  isMaterialRadioactive?: NoYes | null;
  airType?: HmimAirType | null;
  nos?: NoYes | null;
  iataStar?: NoYes | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packCode?: DeserializedType<T, 'Edm.String'> | null;
}
