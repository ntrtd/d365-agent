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
import { CustTransOpens } from './CustTransOpens';

/**
 * Request builder class for operations supported on the {@link CustTransOpens} entity.
 */
export class CustTransOpensRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustTransOpens<T>, T> {
  /**
   * Returns a request builder for querying all `CustTransOpens` entities.
   * @returns A request builder for creating requests to retrieve all `CustTransOpens` entities.
   */
  getAll(): GetAllRequestBuilder<CustTransOpens<T>, T> {
    return new GetAllRequestBuilder<CustTransOpens<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustTransOpens` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustTransOpens`.
   */
  create(
    entity: CustTransOpens<T>
  ): CreateRequestBuilder<CustTransOpens<T>, T> {
    return new CreateRequestBuilder<CustTransOpens<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustTransOpens` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustTransOpens.dataAreaId}.
   * @param sysRecId Key property. See {@link CustTransOpens.sysRecId}.
   * @returns A request builder for creating requests to retrieve one `CustTransOpens` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sysRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustTransOpens<T>, T> {
    return new GetByKeyRequestBuilder<CustTransOpens<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SysRecId: sysRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustTransOpens`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustTransOpens`.
   */
  update(
    entity: CustTransOpens<T>
  ): UpdateRequestBuilder<CustTransOpens<T>, T> {
    return new UpdateRequestBuilder<CustTransOpens<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustTransOpens`.
   * @param dataAreaId Key property. See {@link CustTransOpens.dataAreaId}.
   * @param sysRecId Key property. See {@link CustTransOpens.sysRecId}.
   * @returns A request builder for creating requests that delete an entity of type `CustTransOpens`.
   */
  delete(
    dataAreaId: string,
    sysRecId: BigNumber
  ): DeleteRequestBuilder<CustTransOpens<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustTransOpens`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustTransOpens` by taking the entity as a parameter.
   */
  delete(entity: CustTransOpens<T>): DeleteRequestBuilder<CustTransOpens<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sysRecId?: BigNumber
  ): DeleteRequestBuilder<CustTransOpens<T>, T> {
    return new DeleteRequestBuilder<CustTransOpens<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustTransOpens
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SysRecId: sysRecId!
          }
    );
  }
}
