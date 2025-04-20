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
import { BankCheckLayouts } from './BankCheckLayouts';

/**
 * Request builder class for operations supported on the {@link BankCheckLayouts} entity.
 */
export class BankCheckLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankCheckLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `BankCheckLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `BankCheckLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<BankCheckLayouts<T>, T> {
    return new GetAllRequestBuilder<BankCheckLayouts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankCheckLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankCheckLayouts`.
   */
  create(
    entity: BankCheckLayouts<T>
  ): CreateRequestBuilder<BankCheckLayouts<T>, T> {
    return new CreateRequestBuilder<BankCheckLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankCheckLayouts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankCheckLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankCheckLayouts.bankAccountId}.
   * @returns A request builder for creating requests to retrieve one `BankCheckLayouts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankCheckLayouts<T>, T> {
    return new GetByKeyRequestBuilder<BankCheckLayouts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccountId: bankAccountId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankCheckLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankCheckLayouts`.
   */
  update(
    entity: BankCheckLayouts<T>
  ): UpdateRequestBuilder<BankCheckLayouts<T>, T> {
    return new UpdateRequestBuilder<BankCheckLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankCheckLayouts`.
   * @param dataAreaId Key property. See {@link BankCheckLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankCheckLayouts.bankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `BankCheckLayouts`.
   */
  delete(
    dataAreaId: string,
    bankAccountId: string
  ): DeleteRequestBuilder<BankCheckLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankCheckLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankCheckLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: BankCheckLayouts<T>
  ): DeleteRequestBuilder<BankCheckLayouts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountId?: string
  ): DeleteRequestBuilder<BankCheckLayouts<T>, T> {
    return new DeleteRequestBuilder<BankCheckLayouts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankCheckLayouts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountId: bankAccountId!
          }
    );
  }
}
