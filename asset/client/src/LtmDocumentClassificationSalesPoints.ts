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
import type { LtmDocumentClassificationSalesPointsApi } from './LtmDocumentClassificationSalesPointsApi';
import { LtmAccountType } from './LtmAccountType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "LTMDocumentClassificationSalesPoints" of service "d365_metadata".
 */
export class LtmDocumentClassificationSalesPoints<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationSalesPointsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationSalesPoints.
   */
  static override _entityName = 'LTMDocumentClassificationSalesPoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationSalesPoints entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesPointId',
    'AccountType',
    'DocumentClassificationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   */
  declare salesPointId: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LtmAccountType | null;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Number Sequence.
   * @nullable
   */
  declare numberSequence?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Concept 4.
   * @nullable
   */
  declare printConcept4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Concept 1.
   * @nullable
   */
  declare printConcept1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Concept 2.
   * @nullable
   */
  declare printConcept2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Concept 3.
   * @nullable
   */
  declare printConcept3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 3.
   * @nullable
   */
  declare note3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 2.
   * @nullable
   */
  declare note2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 1.
   * @nullable
   */
  declare note1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSetEntity?: DimensionSets<T> | null;

  constructor(_entityApi: LtmDocumentClassificationSalesPointsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationSalesPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesPointId: DeserializedType<T, 'Edm.String'>;
  accountType?: LtmAccountType | null;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  numberSequence?: DeserializedType<T, 'Edm.String'> | null;
  printConcept4?: DeserializedType<T, 'Edm.String'> | null;
  printConcept1?: DeserializedType<T, 'Edm.String'> | null;
  printConcept2?: DeserializedType<T, 'Edm.String'> | null;
  printConcept3?: DeserializedType<T, 'Edm.String'> | null;
  note3?: DeserializedType<T, 'Edm.String'> | null;
  note2?: DeserializedType<T, 'Edm.String'> | null;
  note1?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSetEntity?: DimensionSetsType<T> | null;
}
