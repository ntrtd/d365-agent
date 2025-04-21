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
import { RetailTransactionDisabledValidationRules } from './RetailTransactionDisabledValidationRules';

/**
 * Request builder class for operations supported on the {@link RetailTransactionDisabledValidationRules} entity.
 */
export class RetailTransactionDisabledValidationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionDisabledValidationRules<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionDisabledValidationRules` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionDisabledValidationRules` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionDisabledValidationRules<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionDisabledValidationRules<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionDisabledValidationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionDisabledValidationRules`.
   */
  create(
    entity: RetailTransactionDisabledValidationRules<T>
  ): CreateRequestBuilder<RetailTransactionDisabledValidationRules<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionDisabledValidationRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionDisabledValidationRules` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionDisabledValidationRules.dataAreaId}.
   * @param methodName Key property. See {@link RetailTransactionDisabledValidationRules.methodName}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionDisabledValidationRules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    methodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionDisabledValidationRules<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionDisabledValidationRules<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      MethodName: methodName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionDisabledValidationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionDisabledValidationRules`.
   */
  update(
    entity: RetailTransactionDisabledValidationRules<T>
  ): UpdateRequestBuilder<RetailTransactionDisabledValidationRules<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionDisabledValidationRules<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDisabledValidationRules`.
   * @param dataAreaId Key property. See {@link RetailTransactionDisabledValidationRules.dataAreaId}.
   * @param methodName Key property. See {@link RetailTransactionDisabledValidationRules.methodName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDisabledValidationRules`.
   */
  delete(
    dataAreaId: string,
    methodName: string
  ): DeleteRequestBuilder<RetailTransactionDisabledValidationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDisabledValidationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDisabledValidationRules` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionDisabledValidationRules<T>
  ): DeleteRequestBuilder<RetailTransactionDisabledValidationRules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    methodName?: string
  ): DeleteRequestBuilder<RetailTransactionDisabledValidationRules<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionDisabledValidationRules<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionDisabledValidationRules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MethodName: methodName!
          }
    );
  }
}
