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
import { WithholdConcessions } from './WithholdConcessions';

/**
 * Request builder class for operations supported on the {@link WithholdConcessions} entity.
 */
export class WithholdConcessionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdConcessions<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdConcessions` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdConcessions` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdConcessions<T>, T> {
    return new GetAllRequestBuilder<WithholdConcessions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdConcessions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdConcessions`.
   */
  create(
    entity: WithholdConcessions<T>
  ): CreateRequestBuilder<WithholdConcessions<T>, T> {
    return new CreateRequestBuilder<WithholdConcessions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdConcessions` entity based on its keys.
   * @param lineId Key property. See {@link WithholdConcessions.lineId}.
   * @param headerId Key property. See {@link WithholdConcessions.headerId}.
   * @returns A request builder for creating requests to retrieve one `WithholdConcessions` entity based on its keys.
   */
  getByKey(
    lineId: DeserializedType<T, 'Edm.Guid'>,
    headerId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WithholdConcessions<T>, T> {
    return new GetByKeyRequestBuilder<WithholdConcessions<T>, T>(
      this.entityApi,
      {
        LineID: lineId,
        HeaderId: headerId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdConcessions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdConcessions`.
   */
  update(
    entity: WithholdConcessions<T>
  ): UpdateRequestBuilder<WithholdConcessions<T>, T> {
    return new UpdateRequestBuilder<WithholdConcessions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdConcessions`.
   * @param lineId Key property. See {@link WithholdConcessions.lineId}.
   * @param headerId Key property. See {@link WithholdConcessions.headerId}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdConcessions`.
   */
  delete(
    lineId: string,
    headerId: string
  ): DeleteRequestBuilder<WithholdConcessions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdConcessions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdConcessions` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdConcessions<T>
  ): DeleteRequestBuilder<WithholdConcessions<T>, T>;
  delete(
    lineIdOrEntity: any,
    headerId?: string
  ): DeleteRequestBuilder<WithholdConcessions<T>, T> {
    return new DeleteRequestBuilder<WithholdConcessions<T>, T>(
      this.entityApi,
      lineIdOrEntity instanceof WithholdConcessions
        ? lineIdOrEntity
        : {
            LineID: lineIdOrEntity!,
            HeaderId: headerId!
          }
    );
  }
}
