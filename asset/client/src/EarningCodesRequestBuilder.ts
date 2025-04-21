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
import { EarningCodes } from './EarningCodes';

/**
 * Request builder class for operations supported on the {@link EarningCodes} entity.
 */
export class EarningCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EarningCodes<T>, T> {
  /**
   * Returns a request builder for querying all `EarningCodes` entities.
   * @returns A request builder for creating requests to retrieve all `EarningCodes` entities.
   */
  getAll(): GetAllRequestBuilder<EarningCodes<T>, T> {
    return new GetAllRequestBuilder<EarningCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EarningCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EarningCodes`.
   */
  create(entity: EarningCodes<T>): CreateRequestBuilder<EarningCodes<T>, T> {
    return new CreateRequestBuilder<EarningCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EarningCodes` entity based on its keys.
   * @param earningCode Key property. See {@link EarningCodes.earningCode}.
   * @returns A request builder for creating requests to retrieve one `EarningCodes` entity based on its keys.
   */
  getByKey(
    earningCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EarningCodes<T>, T> {
    return new GetByKeyRequestBuilder<EarningCodes<T>, T>(this.entityApi, {
      EarningCode: earningCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EarningCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EarningCodes`.
   */
  update(entity: EarningCodes<T>): UpdateRequestBuilder<EarningCodes<T>, T> {
    return new UpdateRequestBuilder<EarningCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EarningCodes`.
   * @param earningCode Key property. See {@link EarningCodes.earningCode}.
   * @returns A request builder for creating requests that delete an entity of type `EarningCodes`.
   */
  delete(earningCode: string): DeleteRequestBuilder<EarningCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EarningCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EarningCodes` by taking the entity as a parameter.
   */
  delete(entity: EarningCodes<T>): DeleteRequestBuilder<EarningCodes<T>, T>;
  delete(earningCodeOrEntity: any): DeleteRequestBuilder<EarningCodes<T>, T> {
    return new DeleteRequestBuilder<EarningCodes<T>, T>(
      this.entityApi,
      earningCodeOrEntity instanceof EarningCodes
        ? earningCodeOrEntity
        : { EarningCode: earningCodeOrEntity! }
    );
  }
}
