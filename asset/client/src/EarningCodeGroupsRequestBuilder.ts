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
import { EarningCodeGroups } from './EarningCodeGroups';

/**
 * Request builder class for operations supported on the {@link EarningCodeGroups} entity.
 */
export class EarningCodeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EarningCodeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `EarningCodeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EarningCodeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EarningCodeGroups<T>, T> {
    return new GetAllRequestBuilder<EarningCodeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EarningCodeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EarningCodeGroups`.
   */
  create(
    entity: EarningCodeGroups<T>
  ): CreateRequestBuilder<EarningCodeGroups<T>, T> {
    return new CreateRequestBuilder<EarningCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EarningCodeGroups` entity based on its keys.
   * @param earningCodeGroup Key property. See {@link EarningCodeGroups.earningCodeGroup}.
   * @returns A request builder for creating requests to retrieve one `EarningCodeGroups` entity based on its keys.
   */
  getByKey(
    earningCodeGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EarningCodeGroups<T>, T> {
    return new GetByKeyRequestBuilder<EarningCodeGroups<T>, T>(this.entityApi, {
      EarningCodeGroup: earningCodeGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EarningCodeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EarningCodeGroups`.
   */
  update(
    entity: EarningCodeGroups<T>
  ): UpdateRequestBuilder<EarningCodeGroups<T>, T> {
    return new UpdateRequestBuilder<EarningCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EarningCodeGroups`.
   * @param earningCodeGroup Key property. See {@link EarningCodeGroups.earningCodeGroup}.
   * @returns A request builder for creating requests that delete an entity of type `EarningCodeGroups`.
   */
  delete(
    earningCodeGroup: string
  ): DeleteRequestBuilder<EarningCodeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EarningCodeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EarningCodeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: EarningCodeGroups<T>
  ): DeleteRequestBuilder<EarningCodeGroups<T>, T>;
  delete(
    earningCodeGroupOrEntity: any
  ): DeleteRequestBuilder<EarningCodeGroups<T>, T> {
    return new DeleteRequestBuilder<EarningCodeGroups<T>, T>(
      this.entityApi,
      earningCodeGroupOrEntity instanceof EarningCodeGroups
        ? earningCodeGroupOrEntity
        : { EarningCodeGroup: earningCodeGroupOrEntity! }
    );
  }
}
