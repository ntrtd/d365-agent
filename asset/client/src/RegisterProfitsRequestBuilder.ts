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
import { RegisterProfits } from './RegisterProfits';

/**
 * Request builder class for operations supported on the {@link RegisterProfits} entity.
 */
export class RegisterProfitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegisterProfits<T>, T> {
  /**
   * Returns a request builder for querying all `RegisterProfits` entities.
   * @returns A request builder for creating requests to retrieve all `RegisterProfits` entities.
   */
  getAll(): GetAllRequestBuilder<RegisterProfits<T>, T> {
    return new GetAllRequestBuilder<RegisterProfits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RegisterProfits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegisterProfits`.
   */
  create(
    entity: RegisterProfits<T>
  ): CreateRequestBuilder<RegisterProfits<T>, T> {
    return new CreateRequestBuilder<RegisterProfits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegisterProfits` entity based on its keys.
   * @param dataAreaId Key property. See {@link RegisterProfits.dataAreaId}.
   * @param registerId Key property. See {@link RegisterProfits.registerId}.
   * @param expenseCode Key property. See {@link RegisterProfits.expenseCode}.
   * @returns A request builder for creating requests to retrieve one `RegisterProfits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    registerId: DeserializedType<T, 'Edm.String'>,
    expenseCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegisterProfits<T>, T> {
    return new GetByKeyRequestBuilder<RegisterProfits<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RegisterId: registerId,
      ExpenseCode: expenseCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RegisterProfits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegisterProfits`.
   */
  update(
    entity: RegisterProfits<T>
  ): UpdateRequestBuilder<RegisterProfits<T>, T> {
    return new UpdateRequestBuilder<RegisterProfits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegisterProfits`.
   * @param dataAreaId Key property. See {@link RegisterProfits.dataAreaId}.
   * @param registerId Key property. See {@link RegisterProfits.registerId}.
   * @param expenseCode Key property. See {@link RegisterProfits.expenseCode}.
   * @returns A request builder for creating requests that delete an entity of type `RegisterProfits`.
   */
  delete(
    dataAreaId: string,
    registerId: string,
    expenseCode: string
  ): DeleteRequestBuilder<RegisterProfits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegisterProfits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegisterProfits` by taking the entity as a parameter.
   */
  delete(
    entity: RegisterProfits<T>
  ): DeleteRequestBuilder<RegisterProfits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    registerId?: string,
    expenseCode?: string
  ): DeleteRequestBuilder<RegisterProfits<T>, T> {
    return new DeleteRequestBuilder<RegisterProfits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RegisterProfits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RegisterId: registerId!,
            ExpenseCode: expenseCode!
          }
    );
  }
}
