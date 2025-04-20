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
import type { EngineeringProductCategoryNomenclaturesApi } from './EngineeringProductCategoryNomenclaturesApi';
import { EcoResNomenclatureRole } from './EcoResNomenclatureRole';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "EngineeringProductCategoryNomenclatures" of service "d365_metadata".
 */
export class EngineeringProductCategoryNomenclatures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductCategoryNomenclaturesType<T>
{
  /**
   * Technical entity name for EngineeringProductCategoryNomenclatures.
   */
  static override _entityName = 'EngineeringProductCategoryNomenclatures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductCategoryNomenclatures entity.
   */
  static _keys = ['EngineeringProductCategoryName', 'NomenclatureRole'];
  /**
   * Engineering Product Category Name.
   */
  declare engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Nomenclature Role.
   * @nullable
   */
  declare nomenclatureRole?: EcoResNomenclatureRole | null;
  /**
   * Is Nomenclature Active.
   * @nullable
   */
  declare isNomenclatureActive?: NoYes | null;

  constructor(_entityApi: EngineeringProductCategoryNomenclaturesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductCategoryNomenclaturesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  nomenclatureRole?: EcoResNomenclatureRole | null;
  isNomenclatureActive?: NoYes | null;
}
