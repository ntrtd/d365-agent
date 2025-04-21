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
import { ReturnLineDetails } from './ReturnLineDetails';

/**
 * Request builder class for operations supported on the {@link ReturnLineDetails} entity.
 */
export class ReturnLineDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnLineDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnLineDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnLineDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnLineDetails<T>, T> {
    return new GetAllRequestBuilder<ReturnLineDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnLineDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnLineDetails`.
   */
  create(
    entity: ReturnLineDetails<T>
  ): CreateRequestBuilder<ReturnLineDetails<T>, T> {
    return new CreateRequestBuilder<ReturnLineDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnLineDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnLineDetails.dataAreaId}.
   * @param returnId Key property. See {@link ReturnLineDetails.returnId}.
   * @param lineNum Key property. See {@link ReturnLineDetails.lineNum}.
   * @returns A request builder for creating requests to retrieve one `ReturnLineDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ReturnLineDetails<T>, T> {
    return new GetByKeyRequestBuilder<ReturnLineDetails<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReturnID: returnId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnLineDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnLineDetails`.
   */
  update(
    entity: ReturnLineDetails<T>
  ): UpdateRequestBuilder<ReturnLineDetails<T>, T> {
    return new UpdateRequestBuilder<ReturnLineDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnLineDetails`.
   * @param dataAreaId Key property. See {@link ReturnLineDetails.dataAreaId}.
   * @param returnId Key property. See {@link ReturnLineDetails.returnId}.
   * @param lineNum Key property. See {@link ReturnLineDetails.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnLineDetails`.
   */
  delete(
    dataAreaId: string,
    returnId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<ReturnLineDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnLineDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnLineDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnLineDetails<T>
  ): DeleteRequestBuilder<ReturnLineDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<ReturnLineDetails<T>, T> {
    return new DeleteRequestBuilder<ReturnLineDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnLineDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnID: returnId!,
            LineNum: lineNum!
          }
    );
  }
}
