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
import { WithholdReportingCodes } from './WithholdReportingCodes';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';

/**
 * Request builder class for operations supported on the {@link WithholdReportingCodes} entity.
 */
export class WithholdReportingCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdReportingCodes<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdReportingCodes` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdReportingCodes` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdReportingCodes<T>, T> {
    return new GetAllRequestBuilder<WithholdReportingCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdReportingCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdReportingCodes`.
   */
  create(
    entity: WithholdReportingCodes<T>
  ): CreateRequestBuilder<WithholdReportingCodes<T>, T> {
    return new CreateRequestBuilder<WithholdReportingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdReportingCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdReportingCodes.dataAreaId}.
   * @param taxType Key property. See {@link WithholdReportingCodes.taxType}.
   * @param withholdingTaxComponent Key property. See {@link WithholdReportingCodes.withholdingTaxComponent}.
   * @param withholdingTaxComponentGroup Key property. See {@link WithholdReportingCodes.withholdingTaxComponentGroup}.
   * @returns A request builder for creating requests to retrieve one `WithholdReportingCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxWithholdType_IN'
    >,
    withholdingTaxComponent: DeserializedType<T, 'Edm.String'>,
    withholdingTaxComponentGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdReportingCodes<T>, T> {
    return new GetByKeyRequestBuilder<WithholdReportingCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxType: taxType,
        WithholdingTaxComponent: withholdingTaxComponent,
        WithholdingTaxComponentGroup: withholdingTaxComponentGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdReportingCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdReportingCodes`.
   */
  update(
    entity: WithholdReportingCodes<T>
  ): UpdateRequestBuilder<WithholdReportingCodes<T>, T> {
    return new UpdateRequestBuilder<WithholdReportingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdReportingCodes`.
   * @param dataAreaId Key property. See {@link WithholdReportingCodes.dataAreaId}.
   * @param taxType Key property. See {@link WithholdReportingCodes.taxType}.
   * @param withholdingTaxComponent Key property. See {@link WithholdReportingCodes.withholdingTaxComponent}.
   * @param withholdingTaxComponentGroup Key property. See {@link WithholdReportingCodes.withholdingTaxComponentGroup}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportingCodes`.
   */
  delete(
    dataAreaId: string,
    taxType: TaxWithholdTypeIn,
    withholdingTaxComponent: string,
    withholdingTaxComponentGroup: string
  ): DeleteRequestBuilder<WithholdReportingCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdReportingCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdReportingCodes` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdReportingCodes<T>
  ): DeleteRequestBuilder<WithholdReportingCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxType?: TaxWithholdTypeIn,
    withholdingTaxComponent?: string,
    withholdingTaxComponentGroup?: string
  ): DeleteRequestBuilder<WithholdReportingCodes<T>, T> {
    return new DeleteRequestBuilder<WithholdReportingCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdReportingCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxType: taxType!,
            WithholdingTaxComponent: withholdingTaxComponent!,
            WithholdingTaxComponentGroup: withholdingTaxComponentGroup!
          }
    );
  }
}
