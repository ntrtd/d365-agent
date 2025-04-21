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
import { VendPriceAdmTables } from './VendPriceAdmTables';

/**
 * Request builder class for operations supported on the {@link VendPriceAdmTables} entity.
 */
export class VendPriceAdmTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendPriceAdmTables<T>, T> {
  /**
   * Returns a request builder for querying all `VendPriceAdmTables` entities.
   * @returns A request builder for creating requests to retrieve all `VendPriceAdmTables` entities.
   */
  getAll(): GetAllRequestBuilder<VendPriceAdmTables<T>, T> {
    return new GetAllRequestBuilder<VendPriceAdmTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendPriceAdmTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendPriceAdmTables`.
   */
  create(
    entity: VendPriceAdmTables<T>
  ): CreateRequestBuilder<VendPriceAdmTables<T>, T> {
    return new CreateRequestBuilder<VendPriceAdmTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendPriceAdmTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendPriceAdmTables.dataAreaId}.
   * @param journalNum Key property. See {@link VendPriceAdmTables.journalNum}.
   * @returns A request builder for creating requests to retrieve one `VendPriceAdmTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendPriceAdmTables<T>, T> {
    return new GetByKeyRequestBuilder<VendPriceAdmTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNum: journalNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendPriceAdmTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendPriceAdmTables`.
   */
  update(
    entity: VendPriceAdmTables<T>
  ): UpdateRequestBuilder<VendPriceAdmTables<T>, T> {
    return new UpdateRequestBuilder<VendPriceAdmTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendPriceAdmTables`.
   * @param dataAreaId Key property. See {@link VendPriceAdmTables.dataAreaId}.
   * @param journalNum Key property. See {@link VendPriceAdmTables.journalNum}.
   * @returns A request builder for creating requests that delete an entity of type `VendPriceAdmTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string
  ): DeleteRequestBuilder<VendPriceAdmTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendPriceAdmTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendPriceAdmTables` by taking the entity as a parameter.
   */
  delete(
    entity: VendPriceAdmTables<T>
  ): DeleteRequestBuilder<VendPriceAdmTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string
  ): DeleteRequestBuilder<VendPriceAdmTables<T>, T> {
    return new DeleteRequestBuilder<VendPriceAdmTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendPriceAdmTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!
          }
    );
  }
}
