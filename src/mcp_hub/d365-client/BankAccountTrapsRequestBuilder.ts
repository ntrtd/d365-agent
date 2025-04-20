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
import { BankAccountTraps } from './BankAccountTraps';

/**
 * Request builder class for operations supported on the {@link BankAccountTraps} entity.
 */
export class BankAccountTrapsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountTraps<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountTraps` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountTraps` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountTraps<T>, T> {
    return new GetAllRequestBuilder<BankAccountTraps<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankAccountTraps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountTraps`.
   */
  create(
    entity: BankAccountTraps<T>
  ): CreateRequestBuilder<BankAccountTraps<T>, T> {
    return new CreateRequestBuilder<BankAccountTraps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountTraps` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountTraps.dataAreaId}.
   * @param bankAccountNumber Key property. See {@link BankAccountTraps.bankAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `BankAccountTraps` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankAccountTraps<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountTraps<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccountNumber: bankAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountTraps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountTraps`.
   */
  update(
    entity: BankAccountTraps<T>
  ): UpdateRequestBuilder<BankAccountTraps<T>, T> {
    return new UpdateRequestBuilder<BankAccountTraps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountTraps`.
   * @param dataAreaId Key property. See {@link BankAccountTraps.dataAreaId}.
   * @param bankAccountNumber Key property. See {@link BankAccountTraps.bankAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTraps`.
   */
  delete(
    dataAreaId: string,
    bankAccountNumber: string
  ): DeleteRequestBuilder<BankAccountTraps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountTraps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTraps` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountTraps<T>
  ): DeleteRequestBuilder<BankAccountTraps<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountNumber?: string
  ): DeleteRequestBuilder<BankAccountTraps<T>, T> {
    return new DeleteRequestBuilder<BankAccountTraps<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountTraps
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountNumber: bankAccountNumber!
          }
    );
  }
}
