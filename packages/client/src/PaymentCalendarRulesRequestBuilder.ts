/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PaymentCalendarRules } from './PaymentCalendarRules';
import { PaymCalendarModuleType } from './PaymCalendarModuleType';

/**
 * Request builder class for operations supported on the {@link PaymentCalendarRules} entity.
 */
export class PaymentCalendarRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentCalendarRules<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentCalendarRules` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentCalendarRules` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentCalendarRules<T>, T> {
    return new GetAllRequestBuilder<PaymentCalendarRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentCalendarRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentCalendarRules`.
   */
  create(
    entity: PaymentCalendarRules<T>
  ): CreateRequestBuilder<PaymentCalendarRules<T>, T> {
    return new CreateRequestBuilder<PaymentCalendarRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentCalendarRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentCalendarRules.dataAreaId}.
   * @param moduleType Key property. See {@link PaymentCalendarRules.moduleType}.
   * @param priority Key property. See {@link PaymentCalendarRules.priority}.
   * @returns A request builder for creating requests to retrieve one `PaymentCalendarRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    moduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.PaymCalendarModuleType'
    >,
    priority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PaymentCalendarRules<T>, T> {
    return new GetByKeyRequestBuilder<PaymentCalendarRules<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ModuleType: moduleType,
        Priority: priority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentCalendarRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentCalendarRules`.
   */
  update(
    entity: PaymentCalendarRules<T>
  ): UpdateRequestBuilder<PaymentCalendarRules<T>, T> {
    return new UpdateRequestBuilder<PaymentCalendarRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendarRules`.
   * @param dataAreaId Key property. See {@link PaymentCalendarRules.dataAreaId}.
   * @param moduleType Key property. See {@link PaymentCalendarRules.moduleType}.
   * @param priority Key property. See {@link PaymentCalendarRules.priority}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendarRules`.
   */
  delete(
    dataAreaId: string,
    moduleType: PaymCalendarModuleType,
    priority: number
  ): DeleteRequestBuilder<PaymentCalendarRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentCalendarRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentCalendarRules` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentCalendarRules<T>
  ): DeleteRequestBuilder<PaymentCalendarRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    moduleType?: PaymCalendarModuleType,
    priority?: number
  ): DeleteRequestBuilder<PaymentCalendarRules<T>, T> {
    return new DeleteRequestBuilder<PaymentCalendarRules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentCalendarRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModuleType: moduleType!,
            Priority: priority!
          }
    );
  }
}
