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
import type { ItemHazardousMaterialsV2Api } from './ItemHazardousMaterialsV2Api';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';

/**
 * This class represents the entity "ItemHazardousMaterialsV2" of service "d365_metadata".
 */
export class ItemHazardousMaterialsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemHazardousMaterialsV2Type<T>
{
  /**
   * Technical entity name for ItemHazardousMaterialsV2.
   */
  static override _entityName = 'ItemHazardousMaterialsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemHazardousMaterialsV2 entity.
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
   * Nos.
   * @nullable
   */
  declare nos?: NoYes | null;
  /**
   * Material Code.
   * @nullable
   */
  declare materialCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Technical Name Code.
   * @nullable
   */
  declare technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport Category Code.
   * @nullable
   */
  declare transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marine Pollutant.
   * @nullable
   */
  declare marinePollutant?: NoYes | null;
  /**
   * Label Code.
   * @nullable
   */
  declare labelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Code.
   * @nullable
   */
  declare classCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enviro Dangerous.
   * @nullable
   */
  declare enviroDangerous?: NoYes | null;
  /**
   * Class Group Code.
   * @nullable
   */
  declare classGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Group Code.
   * @nullable
   */
  declare packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Air Type.
   * @nullable
   */
  declare airType?: HmimAirType | null;
  /**
   * Tunnel Code.
   * @nullable
   */
  declare tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Description.
   * @nullable
   */
  declare materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Code.
   * @nullable
   */
  declare packCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iata Star.
   * @nullable
   */
  declare iataStar?: NoYes | null;
  /**
   * Is Material Radioactive.
   * @nullable
   */
  declare isMaterialRadioactive?: NoYes | null;
  /**
   * Identification Code.
   * @nullable
   */
  declare identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stowage Code.
   * @nullable
   */
  declare stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiplier.
   */
  declare multiplier: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Limited Qty.
   * @nullable
   */
  declare limitedQty?: NoYes | null;
  /**
   * Division Code.
   * @nullable
   */
  declare divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Inst Code Cargo.
   * @nullable
   */
  declare packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemHazardousMaterialsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ItemHazardousMaterialsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  regCode: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  emsCode?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodePassenger?: DeserializedType<T, 'Edm.String'> | null;
  nos?: NoYes | null;
  materialCode?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  marinePollutant?: NoYes | null;
  labelCode?: DeserializedType<T, 'Edm.String'> | null;
  classCode?: DeserializedType<T, 'Edm.String'> | null;
  enviroDangerous?: NoYes | null;
  classGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  airType?: HmimAirType | null;
  tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  materialDescription?: DeserializedType<T, 'Edm.String'> | null;
  packCode?: DeserializedType<T, 'Edm.String'> | null;
  iataStar?: NoYes | null;
  isMaterialRadioactive?: NoYes | null;
  identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  stowageCode?: DeserializedType<T, 'Edm.String'> | null;
  multiplier: DeserializedType<T, 'Edm.Decimal'>;
  limitedQty?: NoYes | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  packInstCodeCargo?: DeserializedType<T, 'Edm.String'> | null;
}
