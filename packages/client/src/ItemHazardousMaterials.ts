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
import type { ItemHazardousMaterialsApi } from './ItemHazardousMaterialsApi';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';

/**
 * This class represents the entity "ItemHazardousMaterials" of service "d365_metadata".
 */
export class ItemHazardousMaterials<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemHazardousMaterialsType<T>
{
  /**
   * Technical entity name for ItemHazardousMaterials.
   */
  static override _entityName = 'ItemHazardousMaterials';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemHazardousMaterials entity.
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
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Class Group Code.
   * @nullable
   */
  declare classGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Code.
   * @nullable
   */
  declare materialCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Iata Star.
   * @nullable
   */
  declare iataStar?: NoYes | null;
  /**
   * Nos.
   * @nullable
   */
  declare nos?: NoYes | null;
  /**
   * Packing Group Code.
   * @nullable
   */
  declare packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division Code.
   * @nullable
   */
  declare divisionCode?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: ItemHazardousMaterialsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemHazardousMaterialsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  regCode: DeserializedType<T, 'Edm.String'>;
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
  qty: DeserializedType<T, 'Edm.Decimal'>;
  classGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  materialCode?: DeserializedType<T, 'Edm.String'> | null;
  technicalNameCode?: DeserializedType<T, 'Edm.String'> | null;
  transportCategoryCode?: DeserializedType<T, 'Edm.String'> | null;
  identificationCode?: DeserializedType<T, 'Edm.String'> | null;
  flashpoint?: DeserializedType<T, 'Edm.String'> | null;
  marinePollutant?: NoYes | null;
  isMaterialRadioactive?: NoYes | null;
  airType?: HmimAirType | null;
  iataStar?: NoYes | null;
  nos?: NoYes | null;
  packingGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  divisionCode?: DeserializedType<T, 'Edm.String'> | null;
  tunnelCode?: DeserializedType<T, 'Edm.String'> | null;
  packCode?: DeserializedType<T, 'Edm.String'> | null;
}
