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
import { PdsSalesLinePricingCalculationBiEntities } from './PdsSalesLinePricingCalculationBiEntities';

/**
 * Request builder class for operations supported on the {@link PdsSalesLinePricingCalculationBiEntities} entity.
 */
export class PdsSalesLinePricingCalculationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `PdsSalesLinePricingCalculationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `PdsSalesLinePricingCalculationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    PdsSalesLinePricingCalculationBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PdsSalesLinePricingCalculationBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PdsSalesLinePricingCalculationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   */
  create(
    entity: PdsSalesLinePricingCalculationBiEntities<T>
  ): CreateRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T> {
    return new CreateRequestBuilder<
      PdsSalesLinePricingCalculationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PdsSalesLinePricingCalculationBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link PdsSalesLinePricingCalculationBiEntities.dataAreaId}.
   * @param salesLine Key property. See {@link PdsSalesLinePricingCalculationBiEntities.salesLine}.
   * @returns A request builder for creating requests to retrieve one `PdsSalesLinePricingCalculationBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesLine: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      PdsSalesLinePricingCalculationBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesLine: salesLine
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   */
  update(
    entity: PdsSalesLinePricingCalculationBiEntities<T>
  ): UpdateRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      PdsSalesLinePricingCalculationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   * @param dataAreaId Key property. See {@link PdsSalesLinePricingCalculationBiEntities.dataAreaId}.
   * @param salesLine Key property. See {@link PdsSalesLinePricingCalculationBiEntities.salesLine}.
   * @returns A request builder for creating requests that delete an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   */
  delete(
    dataAreaId: string,
    salesLine: BigNumber
  ): DeleteRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PdsSalesLinePricingCalculationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PdsSalesLinePricingCalculationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: PdsSalesLinePricingCalculationBiEntities<T>
  ): DeleteRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesLine?: BigNumber
  ): DeleteRequestBuilder<PdsSalesLinePricingCalculationBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      PdsSalesLinePricingCalculationBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PdsSalesLinePricingCalculationBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesLine: salesLine!
          }
    );
  }
}
