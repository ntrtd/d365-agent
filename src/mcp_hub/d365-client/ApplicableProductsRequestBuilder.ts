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
import { ApplicableProducts } from './ApplicableProducts';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * Request builder class for operations supported on the {@link ApplicableProducts} entity.
 */
export class ApplicableProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicableProducts<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicableProducts` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicableProducts` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicableProducts<T>, T> {
    return new GetAllRequestBuilder<ApplicableProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicableProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicableProducts`.
   */
  create(
    entity: ApplicableProducts<T>
  ): CreateRequestBuilder<ApplicableProducts<T>, T> {
    return new CreateRequestBuilder<ApplicableProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicableProducts` entity based on its keys.
   * @param warrantyGroupName Key property. See {@link ApplicableProducts.warrantyGroupName}.
   * @param status Key property. See {@link ApplicableProducts.status}.
   * @param lineIdentifier Key property. See {@link ApplicableProducts.lineIdentifier}.
   * @returns A request builder for creating requests to retrieve one `ApplicableProducts` entity based on its keys.
   */
  getByKey(
    warrantyGroupName: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantyGroupStatusType'
    >,
    lineIdentifier: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ApplicableProducts<T>, T> {
    return new GetByKeyRequestBuilder<ApplicableProducts<T>, T>(
      this.entityApi,
      {
        WarrantyGroupName: warrantyGroupName,
        Status: status,
        LineIdentifier: lineIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicableProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicableProducts`.
   */
  update(
    entity: ApplicableProducts<T>
  ): UpdateRequestBuilder<ApplicableProducts<T>, T> {
    return new UpdateRequestBuilder<ApplicableProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicableProducts`.
   * @param warrantyGroupName Key property. See {@link ApplicableProducts.warrantyGroupName}.
   * @param status Key property. See {@link ApplicableProducts.status}.
   * @param lineIdentifier Key property. See {@link ApplicableProducts.lineIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicableProducts`.
   */
  delete(
    warrantyGroupName: string,
    status: WarrantyGroupStatusType,
    lineIdentifier: BigNumber
  ): DeleteRequestBuilder<ApplicableProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicableProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicableProducts` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicableProducts<T>
  ): DeleteRequestBuilder<ApplicableProducts<T>, T>;
  delete(
    warrantyGroupNameOrEntity: any,
    status?: WarrantyGroupStatusType,
    lineIdentifier?: BigNumber
  ): DeleteRequestBuilder<ApplicableProducts<T>, T> {
    return new DeleteRequestBuilder<ApplicableProducts<T>, T>(
      this.entityApi,
      warrantyGroupNameOrEntity instanceof ApplicableProducts
        ? warrantyGroupNameOrEntity
        : {
            WarrantyGroupName: warrantyGroupNameOrEntity!,
            Status: status!,
            LineIdentifier: lineIdentifier!
          }
    );
  }
}
