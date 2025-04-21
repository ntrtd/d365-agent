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
import { CreditManagementReasonTables } from './CreditManagementReasonTables';

/**
 * Request builder class for operations supported on the {@link CreditManagementReasonTables} entity.
 */
export class CreditManagementReasonTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementReasonTables<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementReasonTables` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementReasonTables` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementReasonTables<T>, T> {
    return new GetAllRequestBuilder<CreditManagementReasonTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementReasonTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementReasonTables`.
   */
  create(
    entity: CreditManagementReasonTables<T>
  ): CreateRequestBuilder<CreditManagementReasonTables<T>, T> {
    return new CreateRequestBuilder<CreditManagementReasonTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementReasonTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementReasonTables.dataAreaId}.
   * @param reasonId Key property. See {@link CreditManagementReasonTables.reasonId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementReasonTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementReasonTables<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementReasonTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonId: reasonId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementReasonTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementReasonTables`.
   */
  update(
    entity: CreditManagementReasonTables<T>
  ): UpdateRequestBuilder<CreditManagementReasonTables<T>, T> {
    return new UpdateRequestBuilder<CreditManagementReasonTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementReasonTables`.
   * @param dataAreaId Key property. See {@link CreditManagementReasonTables.dataAreaId}.
   * @param reasonId Key property. See {@link CreditManagementReasonTables.reasonId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementReasonTables`.
   */
  delete(
    dataAreaId: string,
    reasonId: string
  ): DeleteRequestBuilder<CreditManagementReasonTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementReasonTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementReasonTables` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementReasonTables<T>
  ): DeleteRequestBuilder<CreditManagementReasonTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonId?: string
  ): DeleteRequestBuilder<CreditManagementReasonTables<T>, T> {
    return new DeleteRequestBuilder<CreditManagementReasonTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementReasonTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonId: reasonId!
          }
    );
  }
}
