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
import { IntrastatToProdComs } from './IntrastatToProdComs';

/**
 * Request builder class for operations supported on the {@link IntrastatToProdComs} entity.
 */
export class IntrastatToProdComsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatToProdComs<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatToProdComs` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatToProdComs` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatToProdComs<T>, T> {
    return new GetAllRequestBuilder<IntrastatToProdComs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntrastatToProdComs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatToProdComs`.
   */
  create(
    entity: IntrastatToProdComs<T>
  ): CreateRequestBuilder<IntrastatToProdComs<T>, T> {
    return new CreateRequestBuilder<IntrastatToProdComs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatToProdComs` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatToProdComs.dataAreaId}.
   * @param commodityHierarchyName Key property. See {@link IntrastatToProdComs.commodityHierarchyName}.
   * @param commodityName Key property. See {@link IntrastatToProdComs.commodityName}.
   * @param fromYear Key property. See {@link IntrastatToProdComs.fromYear}.
   * @param toYear Key property. See {@link IntrastatToProdComs.toYear}.
   * @returns A request builder for creating requests to retrieve one `IntrastatToProdComs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    commodityHierarchyName: DeserializedType<T, 'Edm.String'>,
    commodityName: DeserializedType<T, 'Edm.String'>,
    fromYear: DeserializedType<T, 'Edm.Int32'>,
    toYear: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IntrastatToProdComs<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatToProdComs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CommodityHierarchyName: commodityHierarchyName,
        CommodityName: commodityName,
        FromYear: fromYear,
        ToYear: toYear
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatToProdComs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatToProdComs`.
   */
  update(
    entity: IntrastatToProdComs<T>
  ): UpdateRequestBuilder<IntrastatToProdComs<T>, T> {
    return new UpdateRequestBuilder<IntrastatToProdComs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatToProdComs`.
   * @param dataAreaId Key property. See {@link IntrastatToProdComs.dataAreaId}.
   * @param commodityHierarchyName Key property. See {@link IntrastatToProdComs.commodityHierarchyName}.
   * @param commodityName Key property. See {@link IntrastatToProdComs.commodityName}.
   * @param fromYear Key property. See {@link IntrastatToProdComs.fromYear}.
   * @param toYear Key property. See {@link IntrastatToProdComs.toYear}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatToProdComs`.
   */
  delete(
    dataAreaId: string,
    commodityHierarchyName: string,
    commodityName: string,
    fromYear: number,
    toYear: number
  ): DeleteRequestBuilder<IntrastatToProdComs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatToProdComs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatToProdComs` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatToProdComs<T>
  ): DeleteRequestBuilder<IntrastatToProdComs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    commodityHierarchyName?: string,
    commodityName?: string,
    fromYear?: number,
    toYear?: number
  ): DeleteRequestBuilder<IntrastatToProdComs<T>, T> {
    return new DeleteRequestBuilder<IntrastatToProdComs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatToProdComs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CommodityHierarchyName: commodityHierarchyName!,
            CommodityName: commodityName!,
            FromYear: fromYear!,
            ToYear: toYear!
          }
    );
  }
}
