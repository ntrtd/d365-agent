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
import { WithholdAuthorities } from './WithholdAuthorities';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdAuthorities} entity.
 */
export class WithholdAuthoritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdAuthorities<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdAuthorities` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdAuthorities` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdAuthorities<T>, T> {
    return new GetAllRequestBuilder<WithholdAuthorities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdAuthorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdAuthorities`.
   */
  create(
    entity: WithholdAuthorities<T>
  ): CreateRequestBuilder<WithholdAuthorities<T>, T> {
    return new CreateRequestBuilder<WithholdAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdAuthorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdAuthorities.dataAreaId}.
   * @param taxType Key property. See {@link WithholdAuthorities.taxType}.
   * @param withholdingTaxAuthority Key property. See {@link WithholdAuthorities.withholdingTaxAuthority}.
   * @returns A request builder for creating requests to retrieve one `WithholdAuthorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdType_IN'
    >,
    withholdingTaxAuthority: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdAuthorities<T>, T> {
    return new GetByKeyRequestBuilder<WithholdAuthorities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxType: taxType,
        WithholdingTaxAuthority: withholdingTaxAuthority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdAuthorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdAuthorities`.
   */
  update(
    entity: WithholdAuthorities<T>
  ): UpdateRequestBuilder<WithholdAuthorities<T>, T> {
    return new UpdateRequestBuilder<WithholdAuthorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdAuthorities`.
   * @param dataAreaId Key property. See {@link WithholdAuthorities.dataAreaId}.
   * @param taxType Key property. See {@link WithholdAuthorities.taxType}.
   * @param withholdingTaxAuthority Key property. See {@link WithholdAuthorities.withholdingTaxAuthority}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdAuthorities`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxWithholdTypeIn,
    withholdingTaxAuthority: string
  ): DeleteRequestBuilder<WithholdAuthorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdAuthorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdAuthorities` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdAuthorities<T>
  ): DeleteRequestBuilder<WithholdAuthorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxWithholdTypeIn,
    withholdingTaxAuthority?: string
  ): DeleteRequestBuilder<WithholdAuthorities<T>, T> {
    return new DeleteRequestBuilder<WithholdAuthorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdAuthorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!,
            WithholdingTaxAuthority: withholdingTaxAuthority!
          }
    );
  }
}
