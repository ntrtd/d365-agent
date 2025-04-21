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
import { BenefitsEssTileSetupBenefitCredits } from './BenefitsEssTileSetupBenefitCredits';

/**
 * Request builder class for operations supported on the {@link BenefitsEssTileSetupBenefitCredits} entity.
 */
export class BenefitsEssTileSetupBenefitCreditsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
  /**
   * Returns a request builder for querying all `BenefitsEssTileSetupBenefitCredits` entities.
   * @returns A request builder for creating requests to retrieve all `BenefitsEssTileSetupBenefitCredits` entities.
   */
  getAll(): GetAllRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
    return new GetAllRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BenefitsEssTileSetupBenefitCredits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BenefitsEssTileSetupBenefitCredits`.
   */
  create(
    entity: BenefitsEssTileSetupBenefitCredits<T>
  ): CreateRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
    return new CreateRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BenefitsEssTileSetupBenefitCredits` entity based on its keys.
   * @param dataAreaId Key property. See {@link BenefitsEssTileSetupBenefitCredits.dataAreaId}.
   * @param tileId Key property. See {@link BenefitsEssTileSetupBenefitCredits.tileId}.
   * @returns A request builder for creating requests to retrieve one `BenefitsEssTileSetupBenefitCredits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
    return new GetByKeyRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TileId: tileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BenefitsEssTileSetupBenefitCredits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BenefitsEssTileSetupBenefitCredits`.
   */
  update(
    entity: BenefitsEssTileSetupBenefitCredits<T>
  ): UpdateRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
    return new UpdateRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BenefitsEssTileSetupBenefitCredits`.
   * @param dataAreaId Key property. See {@link BenefitsEssTileSetupBenefitCredits.dataAreaId}.
   * @param tileId Key property. See {@link BenefitsEssTileSetupBenefitCredits.tileId}.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEssTileSetupBenefitCredits`.
   */
  delete(
    dataAreaId: string,
    tileId: string
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BenefitsEssTileSetupBenefitCredits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BenefitsEssTileSetupBenefitCredits` by taking the entity as a parameter.
   */
  delete(
    entity: BenefitsEssTileSetupBenefitCredits<T>
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tileId?: string
  ): DeleteRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T> {
    return new DeleteRequestBuilder<BenefitsEssTileSetupBenefitCredits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BenefitsEssTileSetupBenefitCredits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TileId: tileId!
          }
    );
  }
}
