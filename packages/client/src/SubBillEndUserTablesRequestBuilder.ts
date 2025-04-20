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
import { SubBillEndUserTables } from './SubBillEndUserTables';

/**
 * Request builder class for operations supported on the {@link SubBillEndUserTables} entity.
 */
export class SubBillEndUserTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillEndUserTables<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillEndUserTables` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillEndUserTables` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillEndUserTables<T>, T> {
    return new GetAllRequestBuilder<SubBillEndUserTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SubBillEndUserTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillEndUserTables`.
   */
  create(
    entity: SubBillEndUserTables<T>
  ): CreateRequestBuilder<SubBillEndUserTables<T>, T> {
    return new CreateRequestBuilder<SubBillEndUserTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillEndUserTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillEndUserTables.dataAreaId}.
   * @param endUserAccount Key property. See {@link SubBillEndUserTables.endUserAccount}.
   * @returns A request builder for creating requests to retrieve one `SubBillEndUserTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    endUserAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillEndUserTables<T>, T> {
    return new GetByKeyRequestBuilder<SubBillEndUserTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EndUserAccount: endUserAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillEndUserTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillEndUserTables`.
   */
  update(
    entity: SubBillEndUserTables<T>
  ): UpdateRequestBuilder<SubBillEndUserTables<T>, T> {
    return new UpdateRequestBuilder<SubBillEndUserTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillEndUserTables`.
   * @param dataAreaId Key property. See {@link SubBillEndUserTables.dataAreaId}.
   * @param endUserAccount Key property. See {@link SubBillEndUserTables.endUserAccount}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillEndUserTables`.
   */
  delete(
    dataAreaId: string,
    endUserAccount: string
  ): DeleteRequestBuilder<SubBillEndUserTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillEndUserTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillEndUserTables` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillEndUserTables<T>
  ): DeleteRequestBuilder<SubBillEndUserTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    endUserAccount?: string
  ): DeleteRequestBuilder<SubBillEndUserTables<T>, T> {
    return new DeleteRequestBuilder<SubBillEndUserTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillEndUserTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EndUserAccount: endUserAccount!
          }
    );
  }
}
