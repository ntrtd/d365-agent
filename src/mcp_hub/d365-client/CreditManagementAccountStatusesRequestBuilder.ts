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
import { CreditManagementAccountStatuses } from './CreditManagementAccountStatuses';

/**
 * Request builder class for operations supported on the {@link CreditManagementAccountStatuses} entity.
 */
export class CreditManagementAccountStatusesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementAccountStatuses<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementAccountStatuses` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementAccountStatuses` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementAccountStatuses<T>, T> {
    return new GetAllRequestBuilder<CreditManagementAccountStatuses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CreditManagementAccountStatuses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementAccountStatuses`.
   */
  create(
    entity: CreditManagementAccountStatuses<T>
  ): CreateRequestBuilder<CreditManagementAccountStatuses<T>, T> {
    return new CreateRequestBuilder<CreditManagementAccountStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementAccountStatuses` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementAccountStatuses.dataAreaId}.
   * @param custAccountStatusId Key property. See {@link CreditManagementAccountStatuses.custAccountStatusId}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementAccountStatuses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    custAccountStatusId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementAccountStatuses<T>, T> {
    return new GetByKeyRequestBuilder<CreditManagementAccountStatuses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustAccountStatusId: custAccountStatusId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementAccountStatuses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementAccountStatuses`.
   */
  update(
    entity: CreditManagementAccountStatuses<T>
  ): UpdateRequestBuilder<CreditManagementAccountStatuses<T>, T> {
    return new UpdateRequestBuilder<CreditManagementAccountStatuses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementAccountStatuses`.
   * @param dataAreaId Key property. See {@link CreditManagementAccountStatuses.dataAreaId}.
   * @param custAccountStatusId Key property. See {@link CreditManagementAccountStatuses.custAccountStatusId}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementAccountStatuses`.
   */
  delete(
    dataAreaId: string,
    custAccountStatusId: string
  ): DeleteRequestBuilder<CreditManagementAccountStatuses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementAccountStatuses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementAccountStatuses` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementAccountStatuses<T>
  ): DeleteRequestBuilder<CreditManagementAccountStatuses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    custAccountStatusId?: string
  ): DeleteRequestBuilder<CreditManagementAccountStatuses<T>, T> {
    return new DeleteRequestBuilder<CreditManagementAccountStatuses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementAccountStatuses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustAccountStatusId: custAccountStatusId!
          }
    );
  }
}
