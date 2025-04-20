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
import { WithholdComponentGroups } from './WithholdComponentGroups';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdComponentGroups} entity.
 */
export class WithholdComponentGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdComponentGroups<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdComponentGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdComponentGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdComponentGroups<T>, T> {
    return new GetAllRequestBuilder<WithholdComponentGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdComponentGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdComponentGroups`.
   */
  create(
    entity: WithholdComponentGroups<T>
  ): CreateRequestBuilder<WithholdComponentGroups<T>, T> {
    return new CreateRequestBuilder<WithholdComponentGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdComponentGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdComponentGroups.dataAreaId}.
   * @param taxType Key property. See {@link WithholdComponentGroups.taxType}.
   * @param withholdingTaxComponentGroup Key property. See {@link WithholdComponentGroups.withholdingTaxComponentGroup}.
   * @returns A request builder for creating requests to retrieve one `WithholdComponentGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdType_IN'
    >,
    withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdComponentGroups<T>, T> {
    return new GetByKeyRequestBuilder<WithholdComponentGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxType: taxType,
        WithholdingTaxComponentGroup: withholdingTaxComponentGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdComponentGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdComponentGroups`.
   */
  update(
    entity: WithholdComponentGroups<T>
  ): UpdateRequestBuilder<WithholdComponentGroups<T>, T> {
    return new UpdateRequestBuilder<WithholdComponentGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdComponentGroups`.
   * @param dataAreaId Key property. See {@link WithholdComponentGroups.dataAreaId}.
   * @param taxType Key property. See {@link WithholdComponentGroups.taxType}.
   * @param withholdingTaxComponentGroup Key property. See {@link WithholdComponentGroups.withholdingTaxComponentGroup}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdComponentGroups`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxWithholdTypeIn,
    withholdingTaxComponentGroup: string
  ): DeleteRequestBuilder<WithholdComponentGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdComponentGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdComponentGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdComponentGroups<T>
  ): DeleteRequestBuilder<WithholdComponentGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxWithholdTypeIn,
    withholdingTaxComponentGroup?: string
  ): DeleteRequestBuilder<WithholdComponentGroups<T>, T> {
    return new DeleteRequestBuilder<WithholdComponentGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdComponentGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!,
            WithholdingTaxComponentGroup: withholdingTaxComponentGroup!
          }
    );
  }
}
