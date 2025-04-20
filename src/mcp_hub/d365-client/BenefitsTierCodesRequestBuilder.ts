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
import { BenefitsTierCodes } from './BenefitsTierCodes';

/**
 * Request builder class for operations supported on the {@link BenefitsTierCodes} entity.
 */
export class BenefitsTierCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsTierCodes<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsTierCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsTierCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsTierCodes<T>, T> {
    return new GetAllRequestBuilder<BenefitsTierCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BenefitsTierCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsTierCodes`.
   */
  create(
    entity: BenefitsTierCodes<T>
  ): CreateRequestBuilder<BenefitsTierCodes<T>, T> {
    return new CreateRequestBuilder<BenefitsTierCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsTierCodes` entity based on its keys.
   * @param tierCode Key property. See {@link BenefitsTierCodes.tierCode}.
   * @returns A request builder for creating requests to retrieve one `BenefitsTierCodes` entity based on its keys.
   */
  getByKey(
    tierCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsTierCodes<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsTierCodes<T>, T>(this.entityApi, {
      TierCode: tierCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsTierCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsTierCodes`.
   */
  update(
    entity: BenefitsTierCodes<T>
  ): UpdateRequestBuilder<BenefitsTierCodes<T>, T> {
    return new UpdateRequestBuilder<BenefitsTierCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsTierCodes`.
   * @param tierCode Key property. See {@link BenefitsTierCodes.tierCode}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsTierCodes`.
   */
  delete(tierCode: string): DeleteRequestBuilder<BenefitsTierCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsTierCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsTierCodes` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsTierCodes<T>
  ): DeleteRequestBuilder<BenefitsTierCodes<T>, T>;
  delete(tierCodeOrEntity: any): DeleteRequestBuilder<BenefitsTierCodes<T>, T> {
    return new DeleteRequestBuilder<BenefitsTierCodes<T>, T>(
      this.entityApi,
      tierCodeOrEntity instanceof BenefitsTierCodes
        ? tierCodeOrEntity
        : { TierCode: tierCodeOrEntity! }
    );
  }
}
