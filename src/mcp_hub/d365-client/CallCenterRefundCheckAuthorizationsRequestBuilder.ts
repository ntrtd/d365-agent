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
import { CallCenterRefundCheckAuthorizations } from './CallCenterRefundCheckAuthorizations';

/**
 * Request builder class for operations supported on the {@link CallCenterRefundCheckAuthorizations} entity.
 */
export class CallCenterRefundCheckAuthorizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterRefundCheckAuthorizations` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterRefundCheckAuthorizations` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
    return new GetAllRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterRefundCheckAuthorizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterRefundCheckAuthorizations`.
   */
  create(
    entity: CallCenterRefundCheckAuthorizations<T>
  ): CreateRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
    return new CreateRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterRefundCheckAuthorizations` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterRefundCheckAuthorizations.dataAreaId}.
   * @param salesId Key property. See {@link CallCenterRefundCheckAuthorizations.salesId}.
   * @param lineNumber Key property. See {@link CallCenterRefundCheckAuthorizations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CallCenterRefundCheckAuthorizations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
    return new GetByKeyRequestBuilder<
      CallCenterRefundCheckAuthorizations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesId: salesId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterRefundCheckAuthorizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterRefundCheckAuthorizations`.
   */
  update(
    entity: CallCenterRefundCheckAuthorizations<T>
  ): UpdateRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
    return new UpdateRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundCheckAuthorizations`.
   * @param dataAreaId Key property. See {@link CallCenterRefundCheckAuthorizations.dataAreaId}.
   * @param salesId Key property. See {@link CallCenterRefundCheckAuthorizations.salesId}.
   * @param lineNumber Key property. See {@link CallCenterRefundCheckAuthorizations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundCheckAuthorizations`.
   */
  delete(
    dataAreaId: string,
    salesId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterRefundCheckAuthorizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterRefundCheckAuthorizations` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterRefundCheckAuthorizations<T>
  ): DeleteRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T> {
    return new DeleteRequestBuilder<CallCenterRefundCheckAuthorizations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterRefundCheckAuthorizations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesId: salesId!,
            LineNumber: lineNumber!
          }
    );
  }
}
