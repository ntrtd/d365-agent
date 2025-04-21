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
import { PremiumEarningCodes } from './PremiumEarningCodes';

/**
 * Request builder class for operations supported on the {@link PremiumEarningCodes} entity.
 */
export class PremiumEarningCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PremiumEarningCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PremiumEarningCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PremiumEarningCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PremiumEarningCodes<T>, T> {
    return new GetAllRequestBuilder<PremiumEarningCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PremiumEarningCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PremiumEarningCodes`.
   */
  create(
    entity: PremiumEarningCodes<T>
  ): CreateRequestBuilder<PremiumEarningCodes<T>, T> {
    return new CreateRequestBuilder<PremiumEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PremiumEarningCodes` entity based on its keys.
   * @param premiumEarningCode Key property. See {@link PremiumEarningCodes.premiumEarningCode}.
   * @returns A request builder for creating requests to retrieve one `PremiumEarningCodes` entity based on its keys.
   */
  getByKey(
    premiumEarningCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PremiumEarningCodes<T>, T> {
    return new GetByKeyRequestBuilder<PremiumEarningCodes<T>, T>(
      this.entityApi,
      { PremiumEarningCode: premiumEarningCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PremiumEarningCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PremiumEarningCodes`.
   */
  update(
    entity: PremiumEarningCodes<T>
  ): UpdateRequestBuilder<PremiumEarningCodes<T>, T> {
    return new UpdateRequestBuilder<PremiumEarningCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningCodes`.
   * @param premiumEarningCode Key property. See {@link PremiumEarningCodes.premiumEarningCode}.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningCodes`.
   */
  delete(
    premiumEarningCode: string
  ): DeleteRequestBuilder<PremiumEarningCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PremiumEarningCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PremiumEarningCodes` by taking the entity as a parameter.
   */
  delete(
    entity: PremiumEarningCodes<T>
  ): DeleteRequestBuilder<PremiumEarningCodes<T>, T>;
  delete(
    premiumEarningCodeOrEntity: any
  ): DeleteRequestBuilder<PremiumEarningCodes<T>, T> {
    return new DeleteRequestBuilder<PremiumEarningCodes<T>, T>(
      this.entityApi,
      premiumEarningCodeOrEntity instanceof PremiumEarningCodes
        ? premiumEarningCodeOrEntity
        : { PremiumEarningCode: premiumEarningCodeOrEntity! }
    );
  }
}
