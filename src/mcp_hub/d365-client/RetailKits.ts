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
import type { RetailKitsApi } from './RetailKitsApi';
import { RetailKitStatus } from './RetailKitStatus';
import { NoYes } from './NoYes';
import { RetailKitOrders, RetailKitOrdersType } from './RetailKitOrders';
import {
  RetailKitComponents,
  RetailKitComponentsType
} from './RetailKitComponents';

/**
 * This class represents the entity "RetailKits" of service "d365_metadata".
 */
export class RetailKits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailKitsType<T>
{
  /**
   * Technical entity name for RetailKits.
   */
  static override _entityName = 'RetailKits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKits entity.
   */
  static _keys = ['KitProductNumber'];
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailKitStatus | null;
  /**
   * Disassembly At Register Allowed.
   * @nullable
   */
  declare disassemblyAtRegisterAllowed?: NoYes | null;
  /**
   * Discontinue Kit.
   * @nullable
   */
  declare discontinueKit?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link RetailKitOrders} entity.
   */
  declare retailKitOrder: RetailKitOrders<T>[];
  /**
   * One-to-many navigation property to the {@link RetailKitComponents} entity.
   */
  declare retailKitComponent: RetailKitComponents<T>[];

  constructor(_entityApi: RetailKitsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  status?: RetailKitStatus | null;
  disassemblyAtRegisterAllowed?: NoYes | null;
  discontinueKit?: NoYes | null;
  retailKitOrder: RetailKitOrdersType<T>[];
  retailKitComponent: RetailKitComponentsType<T>[];
}
