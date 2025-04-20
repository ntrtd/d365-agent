/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringProductVersions } from './EngineeringProductVersions';
import { EngineeringProductVersionsRequestBuilder } from './EngineeringProductVersionsRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { ProductReleaseProductDetailsApi } from './ProductReleaseProductDetailsApi';
import { ReleasedEngineeringProductVersionsApi } from './ReleasedEngineeringProductVersionsApi';
import { EngineeringChangeOrderProductReleasesApi } from './EngineeringChangeOrderProductReleasesApi';
import { SentProductReleaseHeadersApi } from './SentProductReleaseHeadersApi';
import { ReceivedProductReleaseHeadersApi } from './ReceivedProductReleaseHeadersApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EngineeringProductVersionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringProductVersions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): EngineeringProductVersionsApi<DeSerializersT> {
    return new EngineeringProductVersionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductReleases} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      ProductReleaseProductDetailsApi<DeSerializersT>,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>,
      SentProductReleaseHeadersApi<DeSerializersT>,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_V_2: new OneToOneLink('ProductV2', this, linkedApis[0]),
      PRODUCT_RELEASE_PRODUCT_DETAILS: new OneToManyLink(
        'ProductReleaseProductDetails',
        this,
        linkedApis[1]
      ),
      RELEASED_ENGINEERING_PRODUCT_VERSIONS: new OneToManyLink(
        'ReleasedEngineeringProductVersions',
        this,
        linkedApis[2]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: new OneToManyLink(
        'EngineeringChangeOrderProductReleases',
        this,
        linkedApis[3]
      ),
      SENT_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'SentProductReleaseHeaders',
        this,
        linkedApis[4]
      ),
      RECEIVED_PRODUCT_RELEASE_HEADERS: new OneToManyLink(
        'ReceivedProductReleaseHeaders',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = EngineeringProductVersions;

  requestBuilder(): EngineeringProductVersionsRequestBuilder<DeSerializersT> {
    return new EngineeringProductVersionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringProductVersions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringProductVersions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EngineeringProductVersions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringProductVersions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_NUMBER: OrderableEdmTypeField<
      EngineeringProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_VERSION_ID: OrderableEdmTypeField<
      EngineeringProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PREVIOUS_ENGINEERING_VERSION_ID: OrderableEdmTypeField<
      EngineeringProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION_NUMBER: OrderableEdmTypeField<
      EngineeringProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENGINEERING_ORGANIZATION_ID: OrderableEdmTypeField<
      EngineeringProductVersions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_V_2: OneToOneLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productReleaseProductDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_RELEASE_PRODUCT_DETAILS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ProductReleaseProductDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedEngineeringProductVersions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_ENGINEERING_PRODUCT_VERSIONS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ReleasedEngineeringProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderProductReleases} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_RELEASES: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductReleasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sentProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENT_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      SentProductReleaseHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link receivedProductReleaseHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECEIVED_PRODUCT_RELEASE_HEADERS: OneToManyLink<
      EngineeringProductVersions<DeSerializersT>,
      DeSerializersT,
      ReceivedProductReleaseHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringProductVersions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link previousEngineeringVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVIOUS_ENGINEERING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'PreviousEngineeringVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link versionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_NUMBER: fieldBuilder.buildEdmTypeField(
          'VersionNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link engineeringOrganizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_ORGANIZATION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringOrganizationId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringProductVersions)
      };
    }

    return this._schema;
  }
}
