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
import { WithholdingSetRolesV2 } from './WithholdingSetRolesV2';

/**
 * Request builder class for operations supported on the {@link WithholdingSetRolesV2} entity.
 */
export class WithholdingSetRolesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdingSetRolesV2<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdingSetRolesV2` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdingSetRolesV2` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdingSetRolesV2<T>, T> {
    return new GetAllRequestBuilder<WithholdingSetRolesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdingSetRolesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdingSetRolesV2`.
   */
  create(
    entity: WithholdingSetRolesV2<T>
  ): CreateRequestBuilder<WithholdingSetRolesV2<T>, T> {
    return new CreateRequestBuilder<WithholdingSetRolesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdingSetRolesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdingSetRolesV2.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link WithholdingSetRolesV2.taxPayerTypeId}.
   * @param addressStateId Key property. See {@link WithholdingSetRolesV2.addressStateId}.
   * @param addressCountryRegionId Key property. See {@link WithholdingSetRolesV2.addressCountryRegionId}.
   * @param withholdingSetId Key property. See {@link WithholdingSetRolesV2.withholdingSetId}.
   * @returns A request builder for creating requests to retrieve one `WithholdingSetRolesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPayerTypeId: DeserializedType<T, 'Edm.String'>,
    addressStateId: DeserializedType<T, 'Edm.String'>,
    addressCountryRegionId: DeserializedType<T, 'Edm.String'>,
    withholdingSetId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdingSetRolesV2<T>, T> {
    return new GetByKeyRequestBuilder<WithholdingSetRolesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxPayerTypeId: taxPayerTypeId,
        AddressStateId: addressStateId,
        AddressCountryRegionId: addressCountryRegionId,
        WithholdingSetID: withholdingSetId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdingSetRolesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdingSetRolesV2`.
   */
  update(
    entity: WithholdingSetRolesV2<T>
  ): UpdateRequestBuilder<WithholdingSetRolesV2<T>, T> {
    return new UpdateRequestBuilder<WithholdingSetRolesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdingSetRolesV2`.
   * @param dataAreaId Key property. See {@link WithholdingSetRolesV2.dataAreaId}.
   * @param taxPayerTypeId Key property. See {@link WithholdingSetRolesV2.taxPayerTypeId}.
   * @param addressStateId Key property. See {@link WithholdingSetRolesV2.addressStateId}.
   * @param addressCountryRegionId Key property. See {@link WithholdingSetRolesV2.addressCountryRegionId}.
   * @param withholdingSetId Key property. See {@link WithholdingSetRolesV2.withholdingSetId}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingSetRolesV2`.
   */
  delete(
    dataAreaId: string,
    taxPayerTypeId: string,
    addressStateId: string,
    addressCountryRegionId: string,
    withholdingSetId: string
  ): DeleteRequestBuilder<WithholdingSetRolesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdingSetRolesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdingSetRolesV2` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdingSetRolesV2<T>
  ): DeleteRequestBuilder<WithholdingSetRolesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPayerTypeId?: string,
    addressStateId?: string,
    addressCountryRegionId?: string,
    withholdingSetId?: string
  ): DeleteRequestBuilder<WithholdingSetRolesV2<T>, T> {
    return new DeleteRequestBuilder<WithholdingSetRolesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdingSetRolesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPayerTypeId: taxPayerTypeId!,
            AddressStateId: addressStateId!,
            AddressCountryRegionId: addressCountryRegionId!,
            WithholdingSetID: withholdingSetId!
          }
    );
  }
}
