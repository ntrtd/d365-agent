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
import { NrTaxItemGroupHeadings } from './NrTaxItemGroupHeadings';

/**
 * Request builder class for operations supported on the {@link NrTaxItemGroupHeadings} entity.
 */
export class NrTaxItemGroupHeadingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NrTaxItemGroupHeadings<T>, T> {
  /**
   * Returns a request builder for querying all `NrTaxItemGroupHeadings` entities.
   * @returns A request builder for creating requests to retrieve all `NrTaxItemGroupHeadings` entities.
   */
  getAll(): GetAllRequestBuilder<NrTaxItemGroupHeadings<T>, T> {
    return new GetAllRequestBuilder<NrTaxItemGroupHeadings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `NrTaxItemGroupHeadings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NrTaxItemGroupHeadings`.
   */
  create(
    entity: NrTaxItemGroupHeadings<T>
  ): CreateRequestBuilder<NrTaxItemGroupHeadings<T>, T> {
    return new CreateRequestBuilder<NrTaxItemGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `NrTaxItemGroupHeadings` entity based on its keys.
   * @param dataAreaId Key property. See {@link NrTaxItemGroupHeadings.dataAreaId}.
   * @param taxGroupOnNaturalResources Key property. See {@link NrTaxItemGroupHeadings.taxGroupOnNaturalResources}.
   * @param taxCode Key property. See {@link NrTaxItemGroupHeadings.taxCode}.
   * @returns A request builder for creating requests to retrieve one `NrTaxItemGroupHeadings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxGroupOnNaturalResources: DeserializedType<T, 'Edm.String'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NrTaxItemGroupHeadings<T>, T> {
    return new GetByKeyRequestBuilder<NrTaxItemGroupHeadings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxGroupOnNaturalResources: taxGroupOnNaturalResources,
        TaxCode: taxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NrTaxItemGroupHeadings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NrTaxItemGroupHeadings`.
   */
  update(
    entity: NrTaxItemGroupHeadings<T>
  ): UpdateRequestBuilder<NrTaxItemGroupHeadings<T>, T> {
    return new UpdateRequestBuilder<NrTaxItemGroupHeadings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NrTaxItemGroupHeadings`.
   * @param dataAreaId Key property. See {@link NrTaxItemGroupHeadings.dataAreaId}.
   * @param taxGroupOnNaturalResources Key property. See {@link NrTaxItemGroupHeadings.taxGroupOnNaturalResources}.
   * @param taxCode Key property. See {@link NrTaxItemGroupHeadings.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxItemGroupHeadings`.
   */
  delete(
    dataAreaId: string,
    taxGroupOnNaturalResources: string,
    taxCode: string
  ): DeleteRequestBuilder<NrTaxItemGroupHeadings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NrTaxItemGroupHeadings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NrTaxItemGroupHeadings` by taking the entity as a parameter.
   */
  delete(
    entity: NrTaxItemGroupHeadings<T>
  ): DeleteRequestBuilder<NrTaxItemGroupHeadings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxGroupOnNaturalResources?: string,
    taxCode?: string
  ): DeleteRequestBuilder<NrTaxItemGroupHeadings<T>, T> {
    return new DeleteRequestBuilder<NrTaxItemGroupHeadings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof NrTaxItemGroupHeadings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxGroupOnNaturalResources: taxGroupOnNaturalResources!,
            TaxCode: taxCode!
          }
    );
  }
}
