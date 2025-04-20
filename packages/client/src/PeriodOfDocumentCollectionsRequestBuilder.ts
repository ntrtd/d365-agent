/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PeriodOfDocumentCollections } from './PeriodOfDocumentCollections';

/**
 * Request builder class for operations supported on the {@link PeriodOfDocumentCollections} entity.
 */
export class PeriodOfDocumentCollectionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodOfDocumentCollections<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodOfDocumentCollections` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodOfDocumentCollections` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodOfDocumentCollections<T>, T> {
    return new GetAllRequestBuilder<PeriodOfDocumentCollections<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PeriodOfDocumentCollections` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodOfDocumentCollections`.
   */
  create(
    entity: PeriodOfDocumentCollections<T>
  ): CreateRequestBuilder<PeriodOfDocumentCollections<T>, T> {
    return new CreateRequestBuilder<PeriodOfDocumentCollections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodOfDocumentCollections` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodOfDocumentCollections.dataAreaId}.
   * @param fromDate Key property. See {@link PeriodOfDocumentCollections.fromDate}.
   * @returns A request builder for creating requests to retrieve one `PeriodOfDocumentCollections` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PeriodOfDocumentCollections<T>, T> {
    return new GetByKeyRequestBuilder<PeriodOfDocumentCollections<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromDate: fromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodOfDocumentCollections`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodOfDocumentCollections`.
   */
  update(
    entity: PeriodOfDocumentCollections<T>
  ): UpdateRequestBuilder<PeriodOfDocumentCollections<T>, T> {
    return new UpdateRequestBuilder<PeriodOfDocumentCollections<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodOfDocumentCollections`.
   * @param dataAreaId Key property. See {@link PeriodOfDocumentCollections.dataAreaId}.
   * @param fromDate Key property. See {@link PeriodOfDocumentCollections.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodOfDocumentCollections`.
   */
  delete(
    dataAreaId: string,
    fromDate: Moment
  ): DeleteRequestBuilder<PeriodOfDocumentCollections<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodOfDocumentCollections`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodOfDocumentCollections` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodOfDocumentCollections<T>
  ): DeleteRequestBuilder<PeriodOfDocumentCollections<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromDate?: Moment
  ): DeleteRequestBuilder<PeriodOfDocumentCollections<T>, T> {
    return new DeleteRequestBuilder<PeriodOfDocumentCollections<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodOfDocumentCollections
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromDate: fromDate!
          }
    );
  }
}
