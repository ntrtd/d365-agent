/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ExternalIdToCustomerMaps } from './ExternalIdToCustomerMaps';

/**
 * Request builder class for operations supported on the {@link ExternalIdToCustomerMaps} entity.
 */
export class ExternalIdToCustomerMapsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalIdToCustomerMaps<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalIdToCustomerMaps` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalIdToCustomerMaps` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalIdToCustomerMaps<T>, T> {
    return new GetAllRequestBuilder<ExternalIdToCustomerMaps<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalIdToCustomerMaps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalIdToCustomerMaps`.
   */
  create(
    entity: ExternalIdToCustomerMaps<T>
  ): CreateRequestBuilder<ExternalIdToCustomerMaps<T>, T> {
    return new CreateRequestBuilder<ExternalIdToCustomerMaps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalIdToCustomerMaps` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternalIdToCustomerMaps.dataAreaId}.
   * @param externalIdentityId Key property. See {@link ExternalIdToCustomerMaps.externalIdentityId}.
   * @param providerId Key property. See {@link ExternalIdToCustomerMaps.providerId}.
   * @returns A request builder for creating requests to retrieve one `ExternalIdToCustomerMaps` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    externalIdentityId: DeserializedType<T, 'Edm.String'>,
    providerId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExternalIdToCustomerMaps<T>, T> {
    return new GetByKeyRequestBuilder<ExternalIdToCustomerMaps<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExternalIdentityId: externalIdentityId,
        ProviderId: providerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalIdToCustomerMaps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalIdToCustomerMaps`.
   */
  update(
    entity: ExternalIdToCustomerMaps<T>
  ): UpdateRequestBuilder<ExternalIdToCustomerMaps<T>, T> {
    return new UpdateRequestBuilder<ExternalIdToCustomerMaps<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalIdToCustomerMaps`.
   * @param dataAreaId Key property. See {@link ExternalIdToCustomerMaps.dataAreaId}.
   * @param externalIdentityId Key property. See {@link ExternalIdToCustomerMaps.externalIdentityId}.
   * @param providerId Key property. See {@link ExternalIdToCustomerMaps.providerId}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalIdToCustomerMaps`.
   */
  delete(
    dataAreaId: string,
    externalIdentityId: string,
    providerId: BigNumber
  ): DeleteRequestBuilder<ExternalIdToCustomerMaps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalIdToCustomerMaps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalIdToCustomerMaps` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalIdToCustomerMaps<T>
  ): DeleteRequestBuilder<ExternalIdToCustomerMaps<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    externalIdentityId?: string,
    providerId?: BigNumber
  ): DeleteRequestBuilder<ExternalIdToCustomerMaps<T>, T> {
    return new DeleteRequestBuilder<ExternalIdToCustomerMaps<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExternalIdToCustomerMaps
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExternalIdentityId: externalIdentityId!,
            ProviderId: providerId!
          }
    );
  }
}
