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
import { EngineeringChangeOrderProductRouteHeaders } from './EngineeringChangeOrderProductRouteHeaders';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductRouteHeaders} entity.
 */
export class EngineeringChangeOrderProductRouteHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductRouteHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductRouteHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<
    EngineeringChangeOrderProductRouteHeaders<T>,
    T
  > {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductRouteHeaders<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductRouteHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   */
  create(
    entity: EngineeringChangeOrderProductRouteHeaders<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductRouteHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductRouteHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteHeaders.engineeringChangeOrderProductLineNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductRouteHeaders.productionSiteId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductRouteHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>,
    engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    productionSiteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductRouteHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      EngineeringChangeOrderNumber: engineeringChangeOrderNumber,
      EngineeringChangeOrderProductLineNumber:
        engineeringChangeOrderProductLineNumber,
      ProductionSiteId: productionSiteId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   */
  update(
    entity: EngineeringChangeOrderProductRouteHeaders<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductRouteHeaders<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductRouteHeaders.dataAreaId}.
   * @param engineeringChangeOrderNumber Key property. See {@link EngineeringChangeOrderProductRouteHeaders.engineeringChangeOrderNumber}.
   * @param engineeringChangeOrderProductLineNumber Key property. See {@link EngineeringChangeOrderProductRouteHeaders.engineeringChangeOrderProductLineNumber}.
   * @param productionSiteId Key property. See {@link EngineeringChangeOrderProductRouteHeaders.productionSiteId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   */
  delete(
    dataAreaId: string,
    engineeringChangeOrderNumber: string,
    engineeringChangeOrderProductLineNumber: BigNumber,
    productionSiteId: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductRouteHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductRouteHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductRouteHeaders<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    engineeringChangeOrderNumber?: string,
    engineeringChangeOrderProductLineNumber?: BigNumber,
    productionSiteId?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductRouteHeaders<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductRouteHeaders<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductRouteHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EngineeringChangeOrderNumber: engineeringChangeOrderNumber!,
            EngineeringChangeOrderProductLineNumber:
              engineeringChangeOrderProductLineNumber!,
            ProductionSiteId: productionSiteId!
          }
    );
  }
}
