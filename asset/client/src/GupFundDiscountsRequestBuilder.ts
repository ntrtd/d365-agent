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
import { GupFundDiscounts } from './GupFundDiscounts';

/**
 * Request builder class for operations supported on the {@link GupFundDiscounts} entity.
 */
export class GupFundDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupFundDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `GupFundDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `GupFundDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<GupFundDiscounts<T>, T> {
    return new GetAllRequestBuilder<GupFundDiscounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupFundDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupFundDiscounts`.
   */
  create(
    entity: GupFundDiscounts<T>
  ): CreateRequestBuilder<GupFundDiscounts<T>, T> {
    return new CreateRequestBuilder<GupFundDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GupFundDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupFundDiscounts.dataAreaId}.
   * @param fundId Key property. See {@link GupFundDiscounts.fundId}.
   * @param offerId Key property. See {@link GupFundDiscounts.offerId}.
   * @returns A request builder for creating requests to retrieve one `GupFundDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fundId: DeserializedType<T, 'Edm.String'>,
    offerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupFundDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<GupFundDiscounts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FundID: fundId,
      OfferId: offerId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GupFundDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupFundDiscounts`.
   */
  update(
    entity: GupFundDiscounts<T>
  ): UpdateRequestBuilder<GupFundDiscounts<T>, T> {
    return new UpdateRequestBuilder<GupFundDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GupFundDiscounts`.
   * @param dataAreaId Key property. See {@link GupFundDiscounts.dataAreaId}.
   * @param fundId Key property. See {@link GupFundDiscounts.fundId}.
   * @param offerId Key property. See {@link GupFundDiscounts.offerId}.
   * @returns A request builder for creating requests that delete an entity of type `GupFundDiscounts`.
   */
  delete(
    dataAreaId: string,
    fundId: string,
    offerId: string
  ): DeleteRequestBuilder<GupFundDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupFundDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupFundDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: GupFundDiscounts<T>
  ): DeleteRequestBuilder<GupFundDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fundId?: string,
    offerId?: string
  ): DeleteRequestBuilder<GupFundDiscounts<T>, T> {
    return new DeleteRequestBuilder<GupFundDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupFundDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FundID: fundId!,
            OfferId: offerId!
          }
    );
  }
}
