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
import type { ItemHazardousMaterialDetailsApi } from './ItemHazardousMaterialDetailsApi';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';

/**
 * This class represents the entity "ItemHazardousMaterialDetails" of service "d365_metadata".
 */
export class ItemHazardousMaterialDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemHazardousMaterialDetailsType<T>
{
  /**
   * Technical entity name for ItemHazardousMaterialDetails.
   */
  static override _entityName = 'ItemHazardousMaterialDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemHazardousMaterialDetails entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'RegCode'];
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
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Class Code.
   * @nullable
   */
  declare classCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Group Code.
   * @nullable
   */
  declare packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label Code Description.
   * @nullable
   */
  declare labelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Name Code Description.
   * @nullable
   */
  declare technicalNameCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pack Code Description.
   * @nullable
   */
  declare packCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Cargo Description.
   * @nullable
   */
  declare packInstCodeCargoDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tunnel Code.
   * @nullable
   */
  declare tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iata Star.
   * @nullable
   */
  declare iataStar?: NoYes | null;
  /**
   * Pack Inst Code Passenger Description.
   * @nullable
   */
  declare packInstCodePassengerDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pack Code.
   * @nullable
   */
  declare packCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Description.
   * @nullable
   */
  declare materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label Code.
   * @nullable
   */
  declare labelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Code Description.
   * @nullable
   */
  declare divisionCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Passenger.
   * @nullable
   */
  declare packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Code.
   * @nullable
   */
  declare identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Code Description.
   * @nullable
   */
  declare classCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tunnel Code Description.
   * @nullable
   */
  declare tunnelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marine Pollutant.
   * @nullable
   */
  declare marinePollutant?: NoYes | null;
  /**
   * Technical Name Code.
   * @nullable
   */
  declare technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Air Type.
   * @nullable
   */
  declare airType?: HmimAirType | null;
  /**
   * Is Material Radioactive.
   * @nullable
   */
  declare isMaterialRadioactive?: NoYes | null;
  /**
   * Pack Inst Code Cargo.
   * @nullable
   */
  declare packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Code.
   * @nullable
   */
  declare divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Category Code Description.
   * @nullable
   */
  declare transportCategoryCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Nos.
   * @nullable
   */
  declare nos?: NoYes | null;
  /**
   * Limited Qty.
   * @nullable
   */
  declare limitedQty?: NoYes | null;
  /**
   * Multiplier.
   */
  declare multiplier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packing Group Code Description.
   * @nullable
   */
  declare packingGroupCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Stowage Code.
   * @nullable
   */
  declare stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Flashpoint.
   * @nullable
   */
  declare flashpoint?: DeserializedType<T, 'Edm.String'> | null;
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
   * Stowage Code Description.
   * @nullable
   */
  declare stowageCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enviro Dangerous.
   * @nullable
   */
  declare enviroDangerous?: NoYes | null;
  /**
   * Identification Code Description.
   * @nullable
   */
  declare identificationCodeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transport Category Code.
   * @nullable
   */
  declare transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ems Code.
   * @nullable
   */
  declare emsCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemHazardousMaterialDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemHazardousMaterialDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  regCode: DeserializedType<T, 'Edm.String'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  labelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  technicalNameCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodeCargoDescription?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  iataStar?: NoYes | null;
  packInstCodePassengerDescription?: DeserializedType<T, 'Edm.String'> | null;
  packCode?: DeserializedType<T, 'Edm.String'> | null;
  materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  labelCode?: DeserializedType<T, 'Edm.String'> | null;
  divisionCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  classCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  marinePollutant?: NoYes | null;
  technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  airType?: HmimAirType | null;
  isMaterialRadioactive?: NoYes | null;
  packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  nos?: NoYes | null;
  limitedQty?: NoYes | null;
  multiplier: DeserializedType<T, 'Edm.Decimal'>;
  packingGroupCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  flashpoint?: DeserializedType<T, 'Edm.String'> | null;
  emsCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  stowageCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  enviroDangerous?: NoYes | null;
  identificationCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  emsCode?: DeserializedType<T, 'Edm.String'> | null;
}
