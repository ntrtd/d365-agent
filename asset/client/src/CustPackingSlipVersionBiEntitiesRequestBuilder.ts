/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CustPackingSlipVersionBiEntities } from './CustPackingSlipVersionBiEntities';

/**
 * Request builder class for operations supported on the {@link CustPackingSlipVersionBiEntities} entity.
 */
export class CustPackingSlipVersionBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustPackingSlipVersionBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustPackingSlipVersionBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustPackingSlipVersionBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustPackingSlipVersionBiEntities`.
   */
  create(
    entity: CustPackingSlipVersionBiEntities<T>
  ): CreateRequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
    return new CreateRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustPackingSlipVersionBiEntities` entity based on its keys.
   * @param custPackingSlipJour Key property. See {@link CustPackingSlipVersionBiEntities.custPackingSlipJour}.
   * @param versionDateTime Key property. See {@link CustPackingSlipVersionBiEntities.versionDateTime}.
   * @returns A request builder for creating requests to retrieve one `CustPackingSlipVersionBiEntities` entity based on its keys.
   */
  getByKey(
    custPackingSlipJour: DeserializedType<T, 'Edm.Int64'>,
    versionDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>(
      this.entityApi,
      {
        CustPackingSlipJour: custPackingSlipJour,
        VersionDateTime: versionDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustPackingSlipVersionBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustPackingSlipVersionBiEntities`.
   */
  update(
    entity: CustPackingSlipVersionBiEntities<T>
  ): UpdateRequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipVersionBiEntities`.
   * @param custPackingSlipJour Key property. See {@link CustPackingSlipVersionBiEntities.custPackingSlipJour}.
   * @param versionDateTime Key property. See {@link CustPackingSlipVersionBiEntities.versionDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipVersionBiEntities`.
   */
  delete(
    custPackingSlipJour: BigNumber,
    versionDateTime: Moment
  ): DeleteRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustPackingSlipVersionBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustPackingSlipVersionBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustPackingSlipVersionBiEntities<T>
  ): DeleteRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>;
  delete(
    custPackingSlipJourOrEntity: any,
    versionDateTime?: Moment
  ): DeleteRequestBuilder<CustPackingSlipVersionBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustPackingSlipVersionBiEntities<T>, T>(
      this.entityApi,
      custPackingSlipJourOrEntity instanceof CustPackingSlipVersionBiEntities
        ? custPackingSlipJourOrEntity
        : {
            CustPackingSlipJour: custPackingSlipJourOrEntity!,
            VersionDateTime: versionDateTime!
          }
    );
  }
}
