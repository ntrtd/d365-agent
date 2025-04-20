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
import type { SalesTradeAgreementAttributeGroupCombinationsApi } from './SalesTradeAgreementAttributeGroupCombinationsApi';
import { NoYes } from './NoYes';
import { GupGroupAll } from './GupGroupAll';
import { GupPriceComponentCodeMaintenanceMode } from './GupPriceComponentCodeMaintenanceMode';
import { GupPriceComponent } from './GupPriceComponent';
import {
  GupOpenTradeAgreementJournalLines,
  GupOpenTradeAgreementJournalLinesType
} from './GupOpenTradeAgreementJournalLines';

/**
 * This class represents the entity "SalesTradeAgreementAttributeGroupCombinations" of service "d365_metadata".
 */
export class SalesTradeAgreementAttributeGroupCombinations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTradeAgreementAttributeGroupCombinationsType<T>
{
  /**
   * Technical entity name for SalesTradeAgreementAttributeGroupCombinations.
   */
  static override _entityName = 'SalesTradeAgreementAttributeGroupCombinations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTradeAgreementAttributeGroupCombinations entity.
   */
  static _keys = ['dataAreaId', 'PriceAttributeGroupCombinationName'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Attribute Group Combination Name.
   */
  declare priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Header Price Attribute Group All Enabled.
   * @nullable
   */
  declare headerPriceAttributeGroupAllEnabled?: NoYes | null;
  /**
   * Header Group All.
   * @nullable
   */
  declare headerGroupAll?: GupGroupAll | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maintenance Mode.
   * @nullable
   */
  declare maintenanceMode?: GupPriceComponentCodeMaintenanceMode | null;
  /**
   * Line Price Attribute Group.
   * @nullable
   */
  declare linePriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Price Attribute Group.
   * @nullable
   */
  declare headerPriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Component.
   * @nullable
   */
  declare priceComponent?: GupPriceComponent | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Price Attribute Group All Enabled.
   * @nullable
   */
  declare linePriceAttributeGroupAllEnabled?: NoYes | null;
  /**
   * Line Group All.
   * @nullable
   */
  declare lineGroupAll?: GupGroupAll | null;
  /**
   * One-to-many navigation property to the {@link GupOpenTradeAgreementJournalLines} entity.
   */
  declare attrGroupCombination: GupOpenTradeAgreementJournalLines<T>[];

  constructor(_entityApi: SalesTradeAgreementAttributeGroupCombinationsApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTradeAgreementAttributeGroupCombinationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priceAttributeGroupCombinationName: DeserializedType<T, 'Edm.String'>;
  headerPriceAttributeGroupAllEnabled?: NoYes | null;
  headerGroupAll?: GupGroupAll | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  maintenanceMode?: GupPriceComponentCodeMaintenanceMode | null;
  linePriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  headerPriceAttributeGroup?: DeserializedType<T, 'Edm.String'> | null;
  priceComponent?: GupPriceComponent | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  linePriceAttributeGroupAllEnabled?: NoYes | null;
  lineGroupAll?: GupGroupAll | null;
  attrGroupCombination: GupOpenTradeAgreementJournalLinesType<T>[];
}
