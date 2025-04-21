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
import { RevaluationGroups } from './RevaluationGroups';

/**
 * Request builder class for operations supported on the {@link RevaluationGroups} entity.
 */
export class RevaluationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RevaluationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RevaluationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RevaluationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RevaluationGroups<T>, T> {
    return new GetAllRequestBuilder<RevaluationGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RevaluationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RevaluationGroups`.
   */
  create(
    entity: RevaluationGroups<T>
  ): CreateRequestBuilder<RevaluationGroups<T>, T> {
    return new CreateRequestBuilder<RevaluationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RevaluationGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RevaluationGroups.dataAreaId}.
   * @param id Key property. See {@link RevaluationGroups.id}.
   * @param transDate Key property. See {@link RevaluationGroups.transDate}.
   * @returns A request builder for creating requests to retrieve one `RevaluationGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.String'>,
    transDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<RevaluationGroups<T>, T> {
    return new GetByKeyRequestBuilder<RevaluationGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Id: id,
      TransDate: transDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RevaluationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RevaluationGroups`.
   */
  update(
    entity: RevaluationGroups<T>
  ): UpdateRequestBuilder<RevaluationGroups<T>, T> {
    return new UpdateRequestBuilder<RevaluationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RevaluationGroups`.
   * @param dataAreaId Key property. See {@link RevaluationGroups.dataAreaId}.
   * @param id Key property. See {@link RevaluationGroups.id}.
   * @param transDate Key property. See {@link RevaluationGroups.transDate}.
   * @returns A request builder for creating requests that delete an entity of type `RevaluationGroups`.
   */
  delete(
    dataAreaId: string,
    id: string,
    transDate: Moment
  ): DeleteRequestBuilder<RevaluationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RevaluationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RevaluationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RevaluationGroups<T>
  ): DeleteRequestBuilder<RevaluationGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string,
    transDate?: Moment
  ): DeleteRequestBuilder<RevaluationGroups<T>, T> {
    return new DeleteRequestBuilder<RevaluationGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RevaluationGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Id: id!,
            TransDate: transDate!
          }
    );
  }
}
