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
import { WarrantyApplicableChannels } from './WarrantyApplicableChannels';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';

/**
 * Request builder class for operations supported on the {@link WarrantyApplicableChannels} entity.
 */
export class WarrantyApplicableChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarrantyApplicableChannels<T>, T> {
  /**
   * Returns a request builder for querying all `WarrantyApplicableChannels` entities.
   * @returns A request builder for creating requests to retrieve all `WarrantyApplicableChannels` entities.
   */
  getAll(): GetAllRequestBuilder<WarrantyApplicableChannels<T>, T> {
    return new GetAllRequestBuilder<WarrantyApplicableChannels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WarrantyApplicableChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarrantyApplicableChannels`.
   */
  create(
    entity: WarrantyApplicableChannels<T>
  ): CreateRequestBuilder<WarrantyApplicableChannels<T>, T> {
    return new CreateRequestBuilder<WarrantyApplicableChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WarrantyApplicableChannels` entity based on its keys.
   * @param warrantyGroupName Key property. See {@link WarrantyApplicableChannels.warrantyGroupName}.
   * @param status Key property. See {@link WarrantyApplicableChannels.status}.
   * @param lineIdentifier Key property. See {@link WarrantyApplicableChannels.lineIdentifier}.
   * @returns A request builder for creating requests to retrieve one `WarrantyApplicableChannels` entity based on its keys.
   */
  getByKey(
    warrantyGroupName: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.WarrantyGroupStatusType'
    >,
    lineIdentifier: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<WarrantyApplicableChannels<T>, T> {
    return new GetByKeyRequestBuilder<WarrantyApplicableChannels<T>, T>(
      this.entityApi,
      {
        WarrantyGroupName: warrantyGroupName,
        Status: status,
        LineIdentifier: lineIdentifier
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WarrantyApplicableChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarrantyApplicableChannels`.
   */
  update(
    entity: WarrantyApplicableChannels<T>
  ): UpdateRequestBuilder<WarrantyApplicableChannels<T>, T> {
    return new UpdateRequestBuilder<WarrantyApplicableChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WarrantyApplicableChannels`.
   * @param warrantyGroupName Key property. See {@link WarrantyApplicableChannels.warrantyGroupName}.
   * @param status Key property. See {@link WarrantyApplicableChannels.status}.
   * @param lineIdentifier Key property. See {@link WarrantyApplicableChannels.lineIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyApplicableChannels`.
   */
  delete(
    warrantyGroupName: string,
    status: WarrantyGroupStatusType,
    lineIdentifier: BigNumber
  ): DeleteRequestBuilder<WarrantyApplicableChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarrantyApplicableChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarrantyApplicableChannels` by taking the entity as a parameter.
   */
  delete(
    entity: WarrantyApplicableChannels<T>
  ): DeleteRequestBuilder<WarrantyApplicableChannels<T>, T>;
  delete(
    warrantyGroupNameOrEntity: any,
    status?: WarrantyGroupStatusType,
    lineIdentifier?: BigNumber
  ): DeleteRequestBuilder<WarrantyApplicableChannels<T>, T> {
    return new DeleteRequestBuilder<WarrantyApplicableChannels<T>, T>(
      this.entityApi,
      warrantyGroupNameOrEntity instanceof WarrantyApplicableChannels
        ? warrantyGroupNameOrEntity
        : {
            WarrantyGroupName: warrantyGroupNameOrEntity!,
            Status: status!,
            LineIdentifier: lineIdentifier!
          }
    );
  }
}
