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
import type { RetailKitComponentsApi } from './RetailKitComponentsApi';
import { NoYes } from './NoYes';
import {
  RetailKitComponentSubstitutes,
  RetailKitComponentSubstitutesType
} from './RetailKitComponentSubstitutes';
import {
  RetailKitReleasedComponents,
  RetailKitReleasedComponentsType
} from './RetailKitReleasedComponents';
import { ProductVariants, ProductVariantsType } from './ProductVariants';
import { RetailKits, RetailKitsType } from './RetailKits';

/**
 * This class represents the entity "RetailKitComponents" of service "d365_metadata".
 */
export class RetailKitComponents<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailKitComponentsType<T>
{
  /**
   * Technical entity name for RetailKitComponents.
   */
  static override _entityName = 'RetailKitComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitComponents entity.
   */
  static _keys = ['KitProductNumber', 'LineNumber'];
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Component Product Number.
   * @nullable
   */
  declare componentProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Not Show At Register.
   * @nullable
   */
  declare doNotShowAtRegister?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailKitComponentSubstitutes} entity.
   */
  declare retailKitComponentSubstitute: RetailKitComponentSubstitutes<T>[];
  /**
   * One-to-many navigation property to the {@link RetailKitReleasedComponents} entity.
   */
  declare retailKitReleasedComponent: RetailKitReleasedComponents<T>[];
  /**
   * One-to-one navigation property to the {@link ProductVariants} entity.
   */
  declare productVariant?: ProductVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailKits} entity.
   */
  declare retailKit?: RetailKits<T> | null;

  constructor(_entityApi: RetailKitComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  componentProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  doNotShowAtRegister?: NoYes | null;
  retailKitComponentSubstitute: RetailKitComponentSubstitutesType<T>[];
  retailKitReleasedComponent: RetailKitReleasedComponentsType<T>[];
  productVariant?: ProductVariantsType<T> | null;
  retailKit?: RetailKitsType<T> | null;
}
