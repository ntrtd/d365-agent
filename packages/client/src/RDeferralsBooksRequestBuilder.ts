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
import { RDeferralsBooks } from './RDeferralsBooks';

/**
 * Request builder class for operations supported on the {@link RDeferralsBooks} entity.
 */
export class RDeferralsBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RDeferralsBooks<T>, T> {
  /**
   * Returns a request builder for querying all `RDeferralsBooks` entities.
   * @returns A request builder for creating requests to retrieve all `RDeferralsBooks` entities.
   */
  getAll(): GetAllRequestBuilder<RDeferralsBooks<T>, T> {
    return new GetAllRequestBuilder<RDeferralsBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RDeferralsBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RDeferralsBooks`.
   */
  create(
    entity: RDeferralsBooks<T>
  ): CreateRequestBuilder<RDeferralsBooks<T>, T> {
    return new CreateRequestBuilder<RDeferralsBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RDeferralsBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link RDeferralsBooks.dataAreaId}.
   * @param deferralsId Key property. See {@link RDeferralsBooks.deferralsId}.
   * @param modelNumber Key property. See {@link RDeferralsBooks.modelNumber}.
   * @returns A request builder for creating requests to retrieve one `RDeferralsBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    deferralsId: DeserializedType<T, 'Edm.String'>,
    modelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RDeferralsBooks<T>, T> {
    return new GetByKeyRequestBuilder<RDeferralsBooks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DeferralsId: deferralsId,
      ModelNumber: modelNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RDeferralsBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RDeferralsBooks`.
   */
  update(
    entity: RDeferralsBooks<T>
  ): UpdateRequestBuilder<RDeferralsBooks<T>, T> {
    return new UpdateRequestBuilder<RDeferralsBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RDeferralsBooks`.
   * @param dataAreaId Key property. See {@link RDeferralsBooks.dataAreaId}.
   * @param deferralsId Key property. See {@link RDeferralsBooks.deferralsId}.
   * @param modelNumber Key property. See {@link RDeferralsBooks.modelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RDeferralsBooks`.
   */
  delete(
    dataAreaId: string,
    deferralsId: string,
    modelNumber: string
  ): DeleteRequestBuilder<RDeferralsBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RDeferralsBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RDeferralsBooks` by taking the entity as a parameter.
   */
  delete(
    entity: RDeferralsBooks<T>
  ): DeleteRequestBuilder<RDeferralsBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    deferralsId?: string,
    modelNumber?: string
  ): DeleteRequestBuilder<RDeferralsBooks<T>, T> {
    return new DeleteRequestBuilder<RDeferralsBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RDeferralsBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DeferralsId: deferralsId!,
            ModelNumber: modelNumber!
          }
    );
  }
}
