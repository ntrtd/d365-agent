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
import { BankPromissoryNoteLayouts } from './BankPromissoryNoteLayouts';

/**
 * Request builder class for operations supported on the {@link BankPromissoryNoteLayouts} entity.
 */
export class BankPromissoryNoteLayoutsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankPromissoryNoteLayouts<T>, T> {
  /**
   * Returns a request builder for querying all `BankPromissoryNoteLayouts` entities.
   * @returns A request builder for creating requests to retrieve all `BankPromissoryNoteLayouts` entities.
   */
  getAll(): GetAllRequestBuilder<BankPromissoryNoteLayouts<T>, T> {
    return new GetAllRequestBuilder<BankPromissoryNoteLayouts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankPromissoryNoteLayouts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankPromissoryNoteLayouts`.
   */
  create(
    entity: BankPromissoryNoteLayouts<T>
  ): CreateRequestBuilder<BankPromissoryNoteLayouts<T>, T> {
    return new CreateRequestBuilder<BankPromissoryNoteLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankPromissoryNoteLayouts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankPromissoryNoteLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankPromissoryNoteLayouts.bankAccountId}.
   * @returns A request builder for creating requests to retrieve one `BankPromissoryNoteLayouts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankPromissoryNoteLayouts<T>, T> {
    return new GetByKeyRequestBuilder<BankPromissoryNoteLayouts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BankAccountId: bankAccountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankPromissoryNoteLayouts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankPromissoryNoteLayouts`.
   */
  update(
    entity: BankPromissoryNoteLayouts<T>
  ): UpdateRequestBuilder<BankPromissoryNoteLayouts<T>, T> {
    return new UpdateRequestBuilder<BankPromissoryNoteLayouts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankPromissoryNoteLayouts`.
   * @param dataAreaId Key property. See {@link BankPromissoryNoteLayouts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankPromissoryNoteLayouts.bankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `BankPromissoryNoteLayouts`.
   */
  delete(
    dataAreaId: string,
    bankAccountId: string
  ): DeleteRequestBuilder<BankPromissoryNoteLayouts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankPromissoryNoteLayouts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankPromissoryNoteLayouts` by taking the entity as a parameter.
   */
  delete(
    entity: BankPromissoryNoteLayouts<T>
  ): DeleteRequestBuilder<BankPromissoryNoteLayouts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountId?: string
  ): DeleteRequestBuilder<BankPromissoryNoteLayouts<T>, T> {
    return new DeleteRequestBuilder<BankPromissoryNoteLayouts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankPromissoryNoteLayouts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountId: bankAccountId!
          }
    );
  }
}
