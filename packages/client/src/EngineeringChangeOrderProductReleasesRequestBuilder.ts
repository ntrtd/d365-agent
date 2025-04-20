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
import { EngineeringChangeOrderProductReleases } from './EngineeringChangeOrderProductReleases';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductReleases} entity.
 */
export class EngineeringChangeOrderProductReleasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductReleases` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductReleases` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductReleases<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductReleases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductReleases`.
   */
  create(
    entity: EngineeringChangeOrderProductReleases<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductReleases<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductReleases` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductReleases.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductReleases.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductReleases.engineeringChangeOrderProductLineNumber}.
   * @param productNumber Key property. See {@link EngineeringChangeOrderProductReleases.productNumber}.
   * @param productVersionId Key property. See {@link EngineeringChangeOrderProductReleases.productVersionId}.
   * @param receivingLegalEntityId Key property. See {@link EngineeringChangeOrderProductReleases.receivingLegalEntityId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductReleases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    productNumber: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    receivingLegalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductReleases<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      ProductNumber: productNumber,
      ProductVersionId: productVersionId,
      ReceivingLegalEntityId: receivingLegalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductReleases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductReleases`.
   */
  update(
    entity: EngineeringChangeOrderProductReleases<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductReleases<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductReleases`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductReleases.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductReleases.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductReleases.engineeringChangeOrderProductLineNumber}.
   * @param productNumber Key property. See {@link EngineeringChangeOrderProductReleases.productNumber}.
   * @param productVersionId Key property. See {@link EngineeringChangeOrderProductReleases.productVersionId}.
   * @param receivingLegalEntityId Key property. See {@link EngineeringChangeOrderProductReleases.receivingLegalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductReleases`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    productNumber: string,
    productVersionId: string,
    receivingLegalEntityId: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductReleases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductReleases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductReleases` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductReleases<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductReleases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    productNumber?: string,
    productVersionId?: string,
    receivingLegalEntityId?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductReleases<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductReleases<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductReleases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            ProductNumber: productNumber!,
            ProductVersionId: productVersionId!,
            ReceivingLegalEntityId: receivingLegalEntityId!
          }
    );
  }
}
