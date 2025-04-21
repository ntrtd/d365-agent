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
import { CallCenterCatalogRequests } from './CallCenterCatalogRequests';

/**
 * Request builder class for operations supported on the {@link CallCenterCatalogRequests} entity.
 */
export class CallCenterCatalogRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCatalogRequests<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCatalogRequests` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCatalogRequests` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCatalogRequests<T>, T> {
    return new GetAllRequestBuilder<CallCenterCatalogRequests<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCatalogRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCatalogRequests`.
   */
  create(
    entity: CallCenterCatalogRequests<T>
  ): CreateRequestBuilder<CallCenterCatalogRequests<T>, T> {
    return new CreateRequestBuilder<CallCenterCatalogRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCatalogRequests` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCatalogRequests.dataAreaId}.
   * @param catalogDescription Key property. See {@link CallCenterCatalogRequests.catalogDescription}.
   * @param catalogRequestNumber Key property. See {@link CallCenterCatalogRequests.catalogRequestNumber}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCatalogRequests` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    catalogDescription: DeserializedType<T, 'Edm.String'>,
    catalogRequestNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CallCenterCatalogRequests<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCatalogRequests<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CatalogDescription: catalogDescription,
        CatalogRequestNumber: catalogRequestNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCatalogRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCatalogRequests`.
   */
  update(
    entity: CallCenterCatalogRequests<T>
  ): UpdateRequestBuilder<CallCenterCatalogRequests<T>, T> {
    return new UpdateRequestBuilder<CallCenterCatalogRequests<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCatalogRequests`.
   * @param dataAreaId Key property. See {@link CallCenterCatalogRequests.dataAreaId}.
   * @param catalogDescription Key property. See {@link CallCenterCatalogRequests.catalogDescription}.
   * @param catalogRequestNumber Key property. See {@link CallCenterCatalogRequests.catalogRequestNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCatalogRequests`.
   */
  delete(
    dataAreaId: string,
    catalogDescription: string,
    catalogRequestNumber: BigNumber
  ): DeleteRequestBuilder<CallCenterCatalogRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCatalogRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCatalogRequests` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCatalogRequests<T>
  ): DeleteRequestBuilder<CallCenterCatalogRequests<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    catalogDescription?: string,
    catalogRequestNumber?: BigNumber
  ): DeleteRequestBuilder<CallCenterCatalogRequests<T>, T> {
    return new DeleteRequestBuilder<CallCenterCatalogRequests<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCatalogRequests
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CatalogDescription: catalogDescription!,
            CatalogRequestNumber: catalogRequestNumber!
          }
    );
  }
}
