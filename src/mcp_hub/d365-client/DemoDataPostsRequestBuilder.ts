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
import { DemoDataPosts } from './DemoDataPosts';

/**
 * Request builder class for operations supported on the {@link DemoDataPosts} entity.
 */
export class DemoDataPostsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemoDataPosts<T>, T> {
  /**
   * Returns a request builder for querying all `DemoDataPosts` entities.
   * @returns A request builder for creating requests to retrieve all `DemoDataPosts` entities.
   */
  getAll(): GetAllRequestBuilder<DemoDataPosts<T>, T> {
    return new GetAllRequestBuilder<DemoDataPosts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DemoDataPosts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemoDataPosts`.
   */
  create(entity: DemoDataPosts<T>): CreateRequestBuilder<DemoDataPosts<T>, T> {
    return new CreateRequestBuilder<DemoDataPosts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemoDataPosts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DemoDataPosts.dataAreaId}.
   * @param demoDataJob Key property. See {@link DemoDataPosts.demoDataJob}.
   * @param lineNum Key property. See {@link DemoDataPosts.lineNum}.
   * @returns A request builder for creating requests to retrieve one `DemoDataPosts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    demoDataJob: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<DemoDataPosts<T>, T> {
    return new GetByKeyRequestBuilder<DemoDataPosts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      DemoDataJob: demoDataJob,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DemoDataPosts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemoDataPosts`.
   */
  update(entity: DemoDataPosts<T>): UpdateRequestBuilder<DemoDataPosts<T>, T> {
    return new UpdateRequestBuilder<DemoDataPosts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemoDataPosts`.
   * @param dataAreaId Key property. See {@link DemoDataPosts.dataAreaId}.
   * @param demoDataJob Key property. See {@link DemoDataPosts.demoDataJob}.
   * @param lineNum Key property. See {@link DemoDataPosts.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `DemoDataPosts`.
   */
  delete(
    dataAreaId: string,
    demoDataJob: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<DemoDataPosts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemoDataPosts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemoDataPosts` by taking the entity as a parameter.
   */
  delete(entity: DemoDataPosts<T>): DeleteRequestBuilder<DemoDataPosts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    demoDataJob?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<DemoDataPosts<T>, T> {
    return new DeleteRequestBuilder<DemoDataPosts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DemoDataPosts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DemoDataJob: demoDataJob!,
            LineNum: lineNum!
          }
    );
  }
}
