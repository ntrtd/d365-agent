/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_KitHeaders } from './Kitting_KitHeaders';
import { Kitting_KitHeadersRequestBuilder } from './Kitting_KitHeadersRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { WorkersApi } from './WorkersApi';
import { KittingKitLinesApi } from './KittingKitLinesApi';
import { KittingKitVersionsApi } from './KittingKitVersionsApi';
import { NoYes } from './NoYes';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class Kitting_KitHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Kitting_KitHeaders<DeSerializersT>, DeSerializersT>
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
  ): Kitting_KitHeadersApi<DeSerializersT> {
    return new Kitting_KitHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kittingKitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_LINE: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KIT_LINES: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kittingKitVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_VERSION: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitVersionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationalSitesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      KittingKitLinesApi<DeSerializersT>,
      KittingKitLinesApi<DeSerializersT>,
      KittingKitVersionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCTION_SITE: new OneToOneLink('ProductionSite', this, linkedApis[0]),
      APPROVING_WORKER: new OneToOneLink(
        'ApprovingWorker',
        this,
        linkedApis[1]
      ),
      KITTING_KIT_LINE: new OneToManyLink(
        'KittingKitLine',
        this,
        linkedApis[2]
      ),
      KIT_LINES: new OneToManyLink('KitLines', this, linkedApis[3]),
      KITTING_KIT_VERSION: new OneToManyLink(
        'KittingKitVersion',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = Kitting_KitHeaders;

  requestBuilder(): Kitting_KitHeadersRequestBuilder<DeSerializersT> {
    return new Kitting_KitHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kitting_KitHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Kitting_KitHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_KitHeaders<DeSerializersT>,
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
    typeof Kitting_KitHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_KitHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_ID: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIT_NAME: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_APPROVED: EnumField<
      Kitting_KitHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link approvingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPROVING_WORKER: OneToOneLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kittingKitLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_LINE: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kitLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KIT_LINES: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kittingKitVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_KIT_VERSION: OneToManyLink<
      Kitting_KitHeaders<DeSerializersT>,
      DeSerializersT,
      KittingKitVersionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Kitting_KitHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_ID: fieldBuilder.buildEdmTypeField('KitId', 'Edm.String', false),
        /**
         * Static representation of the {@link kitName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_NAME: fieldBuilder.buildEdmTypeField('KitName', 'Edm.String', true),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approverPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ApproverPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isApproved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED: fieldBuilder.buildEnumField('IsApproved', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_KitHeaders)
      };
    }

    return this._schema;
  }
}
