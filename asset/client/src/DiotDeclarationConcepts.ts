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
import type { DiotDeclarationConceptsApi } from './DiotDeclarationConceptsApi';
import { DiotColumnTypeMx } from './DiotColumnTypeMx';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DiotDeclarationConcepts" of service "d365_metadata".
 */
export class DiotDeclarationConcepts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiotDeclarationConceptsType<T>
{
  /**
   * Technical entity name for DiotDeclarationConcepts.
   */
  static override _entityName = 'DiotDeclarationConcepts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiotDeclarationConcepts entity.
   */
  static _keys = ['dataAreaId', 'ConceptId', 'TaxCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Concept Id.
   */
  declare conceptId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Name.
   * @nullable
   */
  declare taxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Number.
   */
  declare orderNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Nondeductibleamount.
   */
  declare nondeductibleamount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Column Type.
   * @nullable
   */
  declare columnType?: DiotColumnTypeMx | null;
  /**
   * Nondeductible.
   * @nullable
   */
  declare nondeductible?: NoYes | null;

  constructor(_entityApi: DiotDeclarationConceptsApi<T>) {
    super(_entityApi);
  }
}

export interface DiotDeclarationConceptsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  conceptId: DeserializedType<T, 'Edm.Int32'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  taxName?: DeserializedType<T, 'Edm.String'> | null;
  orderNumber: DeserializedType<T, 'Edm.Int32'>;
  nondeductibleamount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  columnType?: DiotColumnTypeMx | null;
  nondeductible?: NoYes | null;
}
