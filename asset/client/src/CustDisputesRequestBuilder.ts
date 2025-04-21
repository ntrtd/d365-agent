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
import { CustDisputes } from './CustDisputes';

/**
 * Request builder class for operations supported on the {@link CustDisputes} entity.
 */
export class CustDisputesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustDisputes<T>, T> {
  /**
   * Returns a request builder for querying all `CustDisputes` entities.
   * @returns A request builder for creating requests to retrieve all `CustDisputes` entities.
   */
  getAll(): GetAllRequestBuilder<CustDisputes<T>, T> {
    return new GetAllRequestBuilder<CustDisputes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustDisputes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustDisputes`.
   */
  create(entity: CustDisputes<T>): CreateRequestBuilder<CustDisputes<T>, T> {
    return new CreateRequestBuilder<CustDisputes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustDisputes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustDisputes.dataAreaId}.
   * @param sysRecId Key property. See {@link CustDisputes.sysRecId}.
   * @returns A request builder for creating requests to retrieve one `CustDisputes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sysRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustDisputes<T>, T> {
    return new GetByKeyRequestBuilder<CustDisputes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SysRecId: sysRecId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustDisputes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustDisputes`.
   */
  update(entity: CustDisputes<T>): UpdateRequestBuilder<CustDisputes<T>, T> {
    return new UpdateRequestBuilder<CustDisputes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustDisputes`.
   * @param dataAreaId Key property. See {@link CustDisputes.dataAreaId}.
   * @param sysRecId Key property. See {@link CustDisputes.sysRecId}.
   * @returns A request builder for creating requests that delete an entity of type `CustDisputes`.
   */
  delete(
    dataAreaId: string,
    sysRecId: BigNumber
  ): DeleteRequestBuilder<CustDisputes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustDisputes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustDisputes` by taking the entity as a parameter.
   */
  delete(entity: CustDisputes<T>): DeleteRequestBuilder<CustDisputes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sysRecId?: BigNumber
  ): DeleteRequestBuilder<CustDisputes<T>, T> {
    return new DeleteRequestBuilder<CustDisputes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustDisputes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SysRecId: sysRecId!
          }
    );
  }
}
